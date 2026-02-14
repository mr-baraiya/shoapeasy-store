import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Shirt } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        clothingType: '',
        size: '',
        color: '',
        design: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // EmailJS configuration
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                clothing_type: formData.clothingType,
                size: formData.size,
                color: formData.color,
                design: formData.design,
                message: formData.message,
                to_name: 'ShopEasy Team',
            };

            await emailjs.send(
                'service_ef4l8lb',           // Service ID
                'template_0evqhzo',          // Template ID
                templateParams,
                'vcfvtcxuQfUbBL4ze'          // User ID
            );

            toast.success('Your custom clothing request has been sent successfully! We\'ll contact you soon.');
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                clothingType: '',
                size: '',
                color: '',
                design: '',
                message: ''
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send request. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-600 p-4 rounded-full">
                            <Shirt size={48} className="text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Design Your Custom Clothing
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Have a unique design in mind? Let us create custom clothing tailored just for you. 
                        Fill out the form below and we'll bring your vision to life!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-lg shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Custom Clothing Request</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Information */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>

                                {/* Clothing Details */}
                                <div className="pt-4 border-t">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Clothing Details</h3>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Clothing Type *
                                            </label>
                                            <select
                                                name="clothingType"
                                                value={formData.clothingType}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            >
                                                <option value="">Select Type</option>
                                                <option value="T-Shirt">T-Shirt</option>
                                                <option value="Hoodie">Hoodie</option>
                                                <option value="Jeans">Jeans</option>
                                                <option value="Dress">Dress</option>
                                                <option value="Jacket">Jacket</option>
                                                <option value="Sweater">Sweater</option>
                                                <option value="Shorts">Shorts</option>
                                                <option value="Pants">Pants</option>
                                                <option value="Shirt">Shirt</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Size *
                                            </label>
                                            <select
                                                name="size"
                                                value={formData.size}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            >
                                                <option value="">Select Size</option>
                                                <option value="XS">XS</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="XXXL">XXXL</option>
                                                <option value="Custom">Custom Size</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Preferred Color *
                                        </label>
                                        <input
                                            type="text"
                                            name="color"
                                            value={formData.color}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="e.g., Navy Blue, Black, Custom Pattern"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Design Preferences *
                                        </label>
                                        <input
                                            type="text"
                                            name="design"
                                            value={formData.design}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="e.g., Logo placement, graphics, embroidery"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Additional Details
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                            placeholder="Tell us more about your custom design requirements, budget, timeline, or any other specifications..."
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg font-semibold"
                                >
                                    {isSubmitting ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Submit Request</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Contact Info Card */}
                        <div className="bg-white rounded-lg shadow-xl p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Mail size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-600">support@shopeasy.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Phone size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Phone</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <MapPin size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Location</h4>
                                        <p className="text-gray-600">123 Fashion Street, NY 10001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-xl p-6 text-white">
                            <h3 className="text-xl font-bold mb-3">Why Choose Custom?</h3>
                            <ul className="space-y-2 text-blue-50">
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Unique designs tailored to you
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Perfect fit guaranteed
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Premium quality materials
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Fast turnaround time
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
