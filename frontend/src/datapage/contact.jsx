// About.jsx
import React from "react";
import { Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../assets/images/LOGOrbg.png"; // your logo
// import aboutImage from "../../assets/image.png"; // optional image

const About = () => {
    return (
        <div className="min-h-screen bg-green-100 py-8">
            {/* Container */}
            <div className="mx-auto max-w-6xl px-4">

                {/* About Card */}
                <div className="mb-10 rounded-xl bg-white p-8 shadow-lg">
                    {/* Optional Image */}
                    <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                        {/* <img
              src={aboutImage}
              alt="About Us"
              className="w-full object-cover"
              style={{ height: "300px" }}
            /> */}
                    </div>

                    {/* Title and Tagline */}
                    <h1 className="text-center text-4xl font-extrabold text-green-600 uppercase mb-2">
                        MY CHITS
                    </h1>
                    <p className="text-center text-xl font-semibold italic text-[#FF9933] mb-6">
                        India's 100% Digital Chit Fund Firm
                    </p>

                    {/* Description */}
                    <div className="space-y-4 text-gray-700 text-justify items-center justify-center">
                        <p>
                            We are a registered chit fund company helping people from all walks of life.
                            We understand the necessity of financial independence and thus connect them
                            with necessary funds when they require it.
                        </p>
                        <p>
                            Join our fast-growing team that's disrupting the traditional chit fund segment
                            and offering exciting new opportunities to retail investors in India.
                        </p>
                    </div>
                </div>

                {/* Contact & Social Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info Card */}
                    {/* Contact Info Card */}
                    <div className="rounded-xl bg-white p-6 shadow-lg flex flex-col items-center text-center">
                        <div className="flex flex-col items-center gap-2 mb-4">
                            <img src={logo} alt="Chits Logo" className="h-12 w-auto" />
                            <p className="text-slate-700 text-sm font-bold hover:text-blue-700">
                                CHIT FUND PVT LTD
                            </p>
                        </div>

                        <p className="flex items-center justify-center gap-2 text-gray-700 mb-2 font-semibold">
                            <Mail size={18} /> info.mychits@gmail.com
                        </p>

                        <p className="flex items-center justify-center gap-2 text-gray-700 mb-4 font-semibold">
                            <Phone size={18} /> 9483900777 / 7669865563
                        </p>
                    </div>

                    {/* Social Media Card */}
                    <div className="rounded-xl bg-white p-6 shadow-lg flex flex-col items-center text-center">
                        <h3 className="font-bold text-lg text-green-600 mb-4">
                            Follow Us
                        </h3>
                        <div className="flex justify-center gap-3">
                            <a
                                href="https://www.facebook.com/Mychitfund"
                                className="bg-blue-500 p-3 rounded-full transition transform hover:scale-110"
                            >
                                <Facebook className="text-white w-5 h-5" />
                            </a>

                            <a
                                href="https://www.instagram.com/my_chits/"
                                className="p-3 rounded-full transition transform hover:scale-110"
                                style={{
                                    background:
                                        "linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)",
                                }}
                            >
                                <Instagram className="text-white w-5 h-5" />
                            </a>

                            <a
                                href="https://www.youtube.com/@MyChit-z6d"
                                className="bg-red-600 p-3 rounded-full transition transform hover:scale-110"
                            >
                                <Youtube className="text-white w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
