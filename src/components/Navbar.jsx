import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { getCartCount } = useCart();
    const { user, signOut } = useAuth();
    const cartCount = getCartCount();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="ShopEasy Logo" className="w-10 h-10" />
                        <span className="text-2xl font-bold text-blue-600">ShopEasy</span>
                    </Link>
                    
                    <div className="flex items-center space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Home
                        </Link>
                        
                        {user && (
                            <Link to="/shop" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                Shop
                            </Link>
                        )}
                        
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Custom Design
                        </Link>
                        
                        {user ? (
                            <>
                                <div className="flex items-center text-gray-700">
                                    <User size={18} className="mr-1" />
                                    <span className="font-medium">{user.name}</span>
                                </div>
                                <button
                                    onClick={signOut}
                                    className="flex items-center text-gray-700 hover:text-red-600 transition-colors font-medium"
                                >
                                    <LogOut size={18} className="mr-1" />
                                    Logout
                                </button>
                                <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                                    <ShoppingCart size={24} />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>
                            </>
                        ) : (
                            <Link to="/signin" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
