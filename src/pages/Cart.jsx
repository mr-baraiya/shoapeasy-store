import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { initiatePayment, formatOrderDetails, convertToINR, IS_TEST_MODE } from '../utils/razorpay';
import { useState } from 'react';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const { user, isAuthenticated } = useAuth();
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Cart is Empty',
                text: 'Please add some items to your cart first!',
            });
            return;
        }

        // Check if user is authenticated
        if (!isAuthenticated()) {
            const result = await Swal.fire({
                icon: 'info',
                title: 'Sign In Required',
                text: 'Please sign in to proceed with checkout',
                showCancelButton: true,
                confirmButtonText: 'Sign In',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#2563eb',
            });
            
            if (result.isConfirmed) {
                navigate('/signin', { state: { from: { pathname: '/cart' } } });
            }
            return;
        }

        // Get customer details - prefill with user data
        const { value: formValues } = await Swal.fire({
            title: 'Confirm Your Details',
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Full Name" value="${user.name}" required>
                <input id="swal-input2" class="swal2-input" type="email" placeholder="Email" value="${user.email}" required>
                <input id="swal-input3" class="swal2-input" type="tel" placeholder="Phone Number" required>
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonColor: '#2563eb',
            confirmButtonText: 'Proceed to Payment',
            preConfirm: () => {
                const name = document.getElementById('swal-input1').value;
                const email = document.getElementById('swal-input2').value;
                const phone = document.getElementById('swal-input3').value;
                
                if (!name || !email || !phone) {
                    Swal.showValidationMessage('Please fill all fields');
                    return false;
                }
                return { name, email, phone };
            }
        });

        if (!formValues) return;

        setIsProcessing(true);

        const orderData = {
            amount: getCartTotal(),
            customerName: formValues.name,
            customerEmail: formValues.email,
            customerPhone: formValues.phone,
            items: formatOrderDetails(cartItems)
        };

        const onSuccess = (response) => {
            setIsProcessing(false);
            Swal.fire({
                icon: 'success',
                title: IS_TEST_MODE ? '🧪 Test Payment Successful!' : 'Payment Successful!',
                html: `
                    ${IS_TEST_MODE ? '<div class="bg-yellow-100 border border-yellow-300 rounded p-2 mb-3"><p class="text-sm font-semibold text-yellow-800">⚠️ This was a TEST transaction. No real money was charged.</p></div>' : ''}
                    <p class="mb-2"><strong>Payment ID:</strong> ${response.razorpay_payment_id}</p>
                    <p class="mb-2"><strong>Amount Paid:</strong> ₹${convertToINR(getCartTotal())} (USD $${getCartTotal().toFixed(2)})</p>
                    <p class="mt-4 text-green-600 font-semibold">Thank you for your ${IS_TEST_MODE ? 'test ' : ''}purchase!</p>
                `,
                confirmButtonColor: '#2563eb',
            }).then(() => {
                clearCart();
            });
        };

        const onFailure = (error) => {
            setIsProcessing(false);
            Swal.fire({
                icon: 'error',
                title: 'Payment Failed',
                text: error || 'Something went wrong. Please try again.',
                confirmButtonColor: '#2563eb',
            });
        };

        initiatePayment(orderData, onSuccess, onFailure);
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <ShoppingBag size={80} className="mx-auto text-gray-400 mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-600 mb-6">Start shopping to add items to your cart!</p>
                    <Link
                        to="/"
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                        Continue Shopping
                        <ArrowRight size={20} className="ml-2" />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />

                                <div className="flex-1">
                                    <Link
                                        to={`/product/${item.id}`}
                                        className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="w-12 text-center font-semibold text-gray-900">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <div className="text-lg font-bold text-gray-800 w-24 text-right">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal (USD)</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal (INR)</span>
                                    <span>₹{convertToINR(getCartTotal())}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-semibold">FREE</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between text-xl font-bold text-gray-800 mb-1">
                                        <span>Total (USD)</span>
                                        <span>${getCartTotal().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-semibold text-blue-600">
                                        <span>Payment Amount (INR)</span>
                                        <span>₹{convertToINR(getCartTotal())}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={isProcessing}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all font-semibold text-lg mb-3 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg"
                            >
                                {isProcessing ? 'Processing...' : 'Proceed to Payment'}
                            </button>

                            <Link
                                to="/"
                                className="block w-full text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
