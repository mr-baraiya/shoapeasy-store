import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { 
    ShoppingBag, 
    Zap, 
    Shield, 
    Sparkles,
    ArrowRight,
    Check,
    Star,
    Globe,
    Lock,
    Package
} from 'lucide-react';

const Home = () => {
    const { isAuthenticated } = useAuth();

    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Lightning Fast",
            description: "Instant browsing with optimized performance"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure Payments",
            description: "Bank-level security for all transactions"
        },
        {
            icon: <Package className="w-6 h-6" />,
            title: "Fast Delivery",
            description: "Express shipping to your doorstep"
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Premium Quality",
            description: "Curated products from trusted brands"
        }
    ];

    const benefits = [
        "Free shipping on orders over $50",
        "30-day hassle-free returns",
        "24/7 customer support",
        "Exclusive member discounts",
        "Price match guarantee",
        "Secure checkout process"
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#5B21B6] to-[#7C3AED]">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-block mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-xl rounded-full border border-white/20">
                                <Sparkles className="w-4 h-4 text-[#06B6D4]" />
                                <span className="text-sm font-semibold text-white">Welcome to ShopEasy</span>
                            </div>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
                        >
                            Elevate Your
                            <span className="block mt-2 bg-gradient-to-r from-white via-[#06B6D4] to-white bg-clip-text text-transparent">
                                Everyday
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
                        >
                            Experience premium shopping reimagined. Discover curated collections, 
                            seamless checkout, and unparalleled service.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            {isAuthenticated() ? (
                                <Link
                                    to="/shop"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full font-bold text-lg shadow-2xl shadow-purple-500/50 transition-all transform hover:scale-105"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Start Shopping
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/signin"
                                        className="group inline-flex items-center gap-2 px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full font-bold text-lg shadow-2xl shadow-purple-500/50 transition-all transform hover:scale-105"
                                    >
                                        Get Started
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 rounded-full font-bold text-lg transition-all transform hover:scale-105"
                                    >
                                        Create Account
                                    </Link>
                                </>
                            )}
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80"
                        >
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-[#06B6D4]" />
                                <span className="text-sm font-medium">Secure Checkout</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-[#06B6D4]" />
                                <span className="text-sm font-medium">Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-[#06B6D4]" />
                                <span className="text-sm font-medium">Easy Returns</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F8FAFC]" style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0% 100%)' }}></div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                            Why Choose ShopEasy?
                        </h2>
                        <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
                            Built for the modern shopper. Designed for excellence.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group p-8 bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl border border-gray-200 hover:border-[#7C3AED] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white rounded-xl mb-5 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[#64748B] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Benefits Section */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#06B6D4]/10 rounded-full mb-6">
                                <Globe className="w-4 h-4 text-[#06B6D4]" />
                                <span className="text-sm font-semibold text-[#06B6D4]">Premium Experience</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                                Shopping Made
                                <span className="block bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                                    Simple & Delightful
                                </span>
                            </h2>
                            
                            <p className="text-xl text-[#64748B] mb-8 leading-relaxed">
                                Join thousands of satisfied customers who trust ShopEasy for their online shopping needs.
                            </p>
                            
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-full flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-[#0F172A] text-lg font-medium">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Content - Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-3xl blur-xl opacity-20"></div>
                                <div className="relative bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-3xl p-12 text-white shadow-2xl">
                                    <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                                    
                                    <h3 className="text-3xl font-bold mb-8">Trusted Worldwide</h3>
                                    
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <div className="text-4xl font-bold mb-2">50K+</div>
                                            <div className="text-white/80">Happy Customers</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">10K+</div>
                                            <div className="text-white/80">Products</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">99%</div>
                                            <div className="text-white/80">Satisfaction</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">24/7</div>
                                            <div className="text-white/80">Support</div>
                                        </div>
                                    </div>

                                    {!isAuthenticated() && (
                                        <div className="mt-10 pt-8 border-t border-white/20">
                                            <p className="text-lg mb-4">
                                                Join today and get <span className="font-bold text-[#06B6D4]">20% off</span> your first order!
                                            </p>
                                            <Link
                                                to="/signup"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7C3AED] rounded-full font-bold hover:bg-gray-100 transition-all"
                                            >
                                                Claim Your Discount
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#2563EB] via-[#5B21B6] to-[#7C3AED] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <Lock className="w-16 h-16 mx-auto mb-6 text-white/80" />
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {isAuthenticated() 
                                ? "Ready to Explore?" 
                                : "Start Your Journey Today"}
                        </h2>
                        
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {isAuthenticated() 
                                ? "Browse our curated collection and find exactly what you're looking for." 
                                : "Join our community and experience shopping like never before."}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {isAuthenticated() ? (
                                <Link
                                    to="/shop"
                                    className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-[#7C3AED] rounded-full font-bold text-lg hover:bg-gray-100 shadow-2xl transition-all transform hover:scale-105"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Browse Products
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/signup"
                                        className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#7C3AED] rounded-full font-bold text-lg hover:bg-gray-100 shadow-2xl transition-all transform hover:scale-105"
                                    >
                                        Create Free Account
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        to="/signin"
                                        className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 rounded-full font-bold text-lg transition-all transform hover:scale-105"
                                    >
                                        Sign In
                                    </Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
