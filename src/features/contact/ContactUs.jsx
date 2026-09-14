import React, { useEffect, useState } from 'react';
import Contect from '../../assets/Images/Contect.jpg';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaArrowLeft } from 'react-icons/fa';

const ContactUs = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="bg-neutral-50 min-h-screen font-sans pb-20">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[45vh] md:h-[65vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${Contect})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center gap-4">
          <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight">
            Contact Us
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-gray-200">
            Everything you need to know for your Cambodia adventure
          </p>
        </div>

        {/* Back Button */}
        <div data-aos="fade-right" data-aos-delay="300" className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-md transition shadow-md"
          >
            <FaArrowLeft size={16} /> <span className="font-semibold text-sm">Back</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* Left: Form */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <span className="inline-block text-[#8BC34A] uppercase font-bold tracking-widest text-xs px-3 py-1 bg-[#8BC34A]/10 rounded-full mb-3">
              Get in Touch
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Send us a Message</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:bg-white transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:bg-white transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:bg-white transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  placeholder="Write your message here..."
                  rows="4"
                  className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:bg-white transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#8BC34A] text-white font-semibold py-3.5 px-6 rounded-lg shadow-md hover:bg-[#7cb342] hover:shadow-lg transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div data-aos="fade-left" data-aos-delay="400" className="flex flex-col gap-6">
          <div>
            <span className="inline-block text-[#8BC34A] uppercase font-bold tracking-widest text-xs px-3 py-1 bg-[#8BC34A]/10 rounded-full mb-3">
              Information
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Contact Information</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#8BC34A]/10 text-[#8BC34A]">
                <FaEnvelope size={22} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Email Us</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  info@cambodia-tourism.com<br />
                  support@cambodia-tourism.com
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#8BC34A]/10 text-[#8BC34A]">
                <FaPhoneAlt size={22} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Call Us</p>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  +855 23 123 456<br />
                  +855 63 987 654
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#8BC34A]/10 text-[#8BC34A]">
              <FaMapMarkerAlt size={22} />
            </div>
            <div>
              <p className="font-bold text-gray-900">Office Location</p>
              <p className="text-gray-600 text-sm mt-1">
                123 Sisowath Quay, Phnom Penh, Cambodia
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#8BC34A]/10 text-[#8BC34A]">
              <FaClock size={22} />
            </div>
            <div>
              <p className="font-bold text-gray-900">Office Hours</p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-[#8BC34A]/10 text-[#8BC34A] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 text-sm mb-6">
              Your information has been successfully submitted. We will get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#8BC34A] hover:bg-[#7cb342] text-white font-semibold py-3 rounded-lg transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;