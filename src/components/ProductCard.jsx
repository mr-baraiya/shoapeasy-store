import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <Link to={`/product/${product.id}`}>
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {!product.inStock && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Out of Stock
                        </div>
                    )}
                </div>
            </Link>
            
            <div className="p-4">
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                </Link>
                
                <div className="flex items-center mb-2">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    <span className="ml-2 text-sm text-gray-500">({product.category})</span>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                    </span>
                    
                    <button
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                        <ShoppingCart size={18} />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
