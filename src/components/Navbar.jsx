import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                        ShopEasy
                    </Link>
                    
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Shop
                        </Link>
                        
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Custom Design
                        </Link>
                        
                        <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
