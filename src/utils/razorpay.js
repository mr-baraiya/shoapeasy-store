// Razorpay Configuration
export const RAZORPAY_KEY_ID = 'rzp_test_ZFxDYdxbnGTEtC';

// Convert USD to INR (approximate rate - you can update this)
const USD_TO_INR_RATE = 83;

export const initiatePayment = async (orderData, onSuccess, onFailure) => {
    // Convert USD to INR
    const amountInINR = orderData.amount * USD_TO_INR_RATE;
    
    const options = {
        key: RAZORPAY_KEY_ID,
        amount: Math.round(amountInINR * 100), // Amount in paise (multiply by 100)
        currency: 'INR',
        name: 'ShopEasy',
        description: 'Purchase from ShopEasy Store',
        image: '/vite.svg', // Your logo
        order_id: orderData.orderId || '', // Optional: if you have backend order creation
        handler: function (response) {
            // Payment successful
            onSuccess(response);
        },
        prefill: {
            name: orderData.customerName || '',
            email: orderData.customerEmail || '',
            contact: orderData.customerPhone || ''
        },
        notes: {
            order_items: orderData.items || '',
            amount_usd: orderData.amount.toFixed(2),
            amount_inr: amountInINR.toFixed(2)
        },
        theme: {
            color: '#2563eb' // Blue color matching your theme
        },
        modal: {
            ondismiss: function() {
                onFailure('Payment cancelled by user');
            }
        }
    };

    try {
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.on('payment.failed', function (response) {
            onFailure(response.error.description);
        });
        razorpayInstance.open();
    } catch (error) {
        onFailure('Error initializing payment: ' + error.message);
    }
};

// Format order details for display
export const formatOrderDetails = (cartItems) => {
    return cartItems.map(item => `${item.name} (x${item.quantity})`).join(', ');
};

// Get INR amount for display
export const convertToINR = (usdAmount) => {
    return (usdAmount * USD_TO_INR_RATE).toFixed(2);
};
