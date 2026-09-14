import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaHotel, FaCar, FaRegClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import why from '../../assets/Images/Why_pic.jpg';

const WhyVisitCambodia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center" data-aos="fade-right">
          <div className="relative group w-full max-w-[500px]">
            <img
              src={why}
              alt="Cambodia landscape"
              className="rounded-0 shadow-xl w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/5 rounded-xl pointer-events-none"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full" data-aos="fade-left">
          <span className="inline-block text-[#8BC34A] uppercase font-bold tracking-widest text-xs px-3 py-1 bg-[#8BC34A]/10 rounded-full mb-3">
            About Cambodia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Visit <span className="text-[#8BC34A]">Cambodia?</span>
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed text-base sm:text-lg">
            Cambodia is a land where ancient temples and modern cities coexist beautifully. 
            From Angkor Wat's sunrise to Phnom Penh's lively culture, every journey tells a story.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed text-base">
            Discover the charm of Khmer traditions, warm hospitality, and breathtaking scenery. 
            Whether you love adventure, culture, or peace, Cambodia has it all.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-gray-800">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="p-2 rounded-md bg-[#8BC34A]/10 text-[#8BC34A]">
                <FaPlane size={20} />
              </div>
              <span className="font-semibold text-sm">World-Class Flights</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="p-2 rounded-md bg-[#8BC34A]/10 text-[#8BC34A]">
                <FaHotel size={20} />
              </div>
              <span className="font-semibold text-sm">Luxury Hotels</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="p-2 rounded-md bg-[#8BC34A]/10 text-[#8BC34A]">
                <FaCar size={20} />
              </div>
              <span className="font-semibold text-sm">Modern Transport</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="p-2 rounded-md bg-[#8BC34A]/10 text-[#8BC34A]">
                <FaRegClock size={20} />
              </div>
              <span className="font-semibold text-sm">24/7 Service</span>
            </div>
          </div>

          {/* Action Button */}
          <Link to="/about">
            <button className="bg-[#8BC34A] text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:bg-[#7cb342] hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5">
              Learn More About Cambodia
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyVisitCambodia;