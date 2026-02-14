import { motion } from 'framer-motion'

const FeatureCard = ({ title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl hover:border-blue-500/50 transition-colors"
        >
            <h3 className="text-xl font-bold mb-3 text-blue-400">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </motion.div>
    )
}

export default FeatureCard
