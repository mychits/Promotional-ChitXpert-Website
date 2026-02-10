import React, { useState, useEffect, useRef } from 'react';
import expertImg from "../assets/images/download.png";

const ScrollingPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [popupCount, setPopupCount] = useState(0); // Always starts at 0 on page load
    const popupTimerRef = useRef(null);
    const scrollListenerRef = useRef(null);

    // ALWAYS reset popup count to 0 on page load/refresh
    useEffect(() => {
        // This ensures count is always 0 when component mounts
        setPopupCount(0);

        // Cleanup any existing timers on mount (in case of hot reload)
        return () => {
            if (popupTimerRef.current) {
                clearTimeout(popupTimerRef.current);
            }
        };
    }, []);

    // Show popup at 40% scroll (First popup - only if count is 0)
    useEffect(() => {
        // Only add scroll listener if we're at count 0 and popup isn't showing
        if (popupCount !== 0 || showPopup) return;

        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

            // Show first popup at 40% scroll
            if (scrollPercentage > 40 && !showPopup) {
                setShowPopup(true);
                // Remove scroll listener after triggering
                window.removeEventListener('scroll', handleScroll);
                scrollListenerRef.current = null;
            }
        };

        window.addEventListener('scroll', handleScroll);
        scrollListenerRef.current = handleScroll;

        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollListenerRef.current = null;
        };
    }, [popupCount, showPopup]);

    // Show second popup after 2-3 minutes (only if count is 1)
    useEffect(() => {
        if (popupCount === 1 && !showPopup) {
            // Clear any existing timer
            if (popupTimerRef.current) {
                clearTimeout(popupTimerRef.current);
            }

            // Schedule second popup after 2-3 minutes (randomized)
            const delay = Math.floor(Math.random() * 60000) + 120000; // 2-3 minutes
            popupTimerRef.current = setTimeout(() => {
                setShowPopup(true);
            }, delay);

            return () => {
                if (popupTimerRef.current) {
                    clearTimeout(popupTimerRef.current);
                }
            };
        }
    }, [popupCount, showPopup]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (popupTimerRef.current) {
                clearTimeout(popupTimerRef.current);
            }
            if (scrollListenerRef.current) {
                window.removeEventListener('scroll', scrollListenerRef.current);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Mobile number:', mobileNumber);
        setIsSubmitted(true);

        // Show success message for 3 seconds then close
        setTimeout(() => {
            setShowPopup(false);
            setIsSubmitted(false);
            setMobileNumber('');
        }, 3000);
    };

    const handleClose = () => {
        setShowPopup(false);

        // Increment popup count
        const newCount = popupCount + 1;
        setPopupCount(newCount);

        // If this was the first popup, schedule the second one
        if (newCount === 1) {
            // Clear scroll listener to prevent first popup from triggering again
            if (scrollListenerRef.current) {
                window.removeEventListener('scroll', scrollListenerRef.current);
                scrollListenerRef.current = null;
            }
            // Second popup will be scheduled by the useEffect above
        }
        // If this was the second popup (count becomes 2), no more popups will show for this session
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-5 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="flex flex-col md:flex-row">
                    {/* Left side - Text content */}
                    <div className="p-8 md:p-10 flex-1">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Still Scrolling?</h2>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Let ChitXpert Help</h3>
                        <p className="text-gray-600 mb-6">
                            Not sure if ChitXpert fits your needs?
                            <br />
                            Our Experts are here! Get a free consultation now.
                        </p>

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Mobile No"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        maxLength={10}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                                >
                                    Talk to Our Expert Now
                                </button>
                            </form>
                        ) : (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                                <p className="text-green-600 font-medium">Thank you! Our expert will contact you shortly.</p>
                            </div>
                        )}
                    </div>

                    {/* Right side - Image */}
                    <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <div className="h-full flex items-center justify-center">
                            <img
                                src={expertImg}
                                alt="Business expert"
                                className="w-full h-full object-cover rounded-l-2xl mr-20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollingPopup;