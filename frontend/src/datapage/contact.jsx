import React, { useState } from 'react';
import GoogleMapComponent from '../components/GoogleMapComponent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        companyName: '',
        message: ''
    });

    // Form validation state
    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.emailAddress.trim()) {
            newErrors.emailAddress = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            newErrors.emailAddress = 'Email address is invalid';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // In a real application, you would send this to your backend
        console.log('Form submitted:', formData);

        // Reset form
        setFormData({
            fullName: '',
            phoneNumber: '',
            emailAddress: '',
            companyName: '',
            message: ''
        });

        // Show success message
        alert('Thank you! We will get back to you within 24 hours.');
    };

    return (
        <div className="min-h-screen bg-blue-50  ">
            <Navbar/>
            <div className="max-w-7xl mx-auto mb-4">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
                </div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Information */}
                    {/* Left Side - Contact Information */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 h-full flex flex-col">

                            {/* Address */}
                            <div className="flex items-start mb-6">
                                <div className="bg-blue-700/50 p-2.5 rounded-lg mr-4 shrink-0 backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed">
                                        MyChits Pvt. Ltd.<br />
                                        Near Sathyanarayana Arch,<br />
                                        Banashankari 3rd Stage,<br />
                                        Bangalore, 560085<br />India
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start mb-6">
                                <div className="bg-blue-700/50 p-2.5 rounded-lg mr-4 shrink-0 backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                                    <p className="text-blue-100">info.mychits@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start mb-6">
                                <div className="bg-blue-700/50 p-2.5 rounded-lg mr-4 shrink-0 backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                                    <p className="text-blue-100">+91 9483900777 / 7669865563</p>
                                    <p className="text-blue-200 text-sm">Mon-Fri from 9am to 6pm</p>
                                </div>
                            </div>

                            {/* Map Section - Fixed */}
                            <div className="mt-auto w-full">
                                <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg border border-white/20 bg-white">
                                    {/* This wrapper ensures the map takes up the full height/width of the container */}
                                    <div className="w-full h-full">
                                        <GoogleMapComponent />
                                    </div>

                                    {/* Overlay Button */}
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                        <p className="text-gray-600 mb-6">Fill out the form and our team will get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>}
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phoneNumber && <p className="mt-1 text-red-500 text-sm">{errors.phoneNumber}</p>}
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="mb-6">
                                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="emailAddress"
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="john@company.com"
                                />
                                {errors.emailAddress && <p className="mt-1 text-red-500 text-sm">{errors.emailAddress}</p>}
                            </div>

                            {/* Company Name */}
                            <div className="mb-6">
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Chit Fund Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Safe Chits Pvt Ltd"
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;