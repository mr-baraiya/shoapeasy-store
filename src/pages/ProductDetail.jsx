import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star, ArrowLeft, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:underline">
                        Return to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-96 object-cover rounded-lg"
                            />
                            {!product.inStock && (
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                                    Out of Stock
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                    {product.name}
                                </h1>

                                <div className="flex items-center mb-4">
                                    <div className="flex items-center">
                                        <Star size={20} className="text-yellow-400 fill-yellow-400" />
                                        <span className="ml-2 text-lg font-semibold">{product.rating}</span>
                                    </div>
                                    <span className="mx-4 text-gray-400">|</span>
                                    <span className="text-gray-600">{product.category}</span>
                                </div>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-blue-600">
                                        ${product.price}
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="flex items-center text-green-600 mb-6">
                                    <Package size={20} className="mr-2" />
                                    <span className="font-medium">
                                        {product.inStock ? 'In Stock - Ready to Ship' : 'Currently Unavailable'}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg font-semibold"
                                >
                                    <ShoppingCart size={24} />
                                    <span>Add to Cart</span>
                                </button>
                                
                                <Link
                                    to="/cart"
                                    className="w-full block text-center border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                                >
                                    View Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetail;
