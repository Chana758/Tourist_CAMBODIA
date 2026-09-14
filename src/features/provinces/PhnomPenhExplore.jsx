// features/phnompenh/PhnomPenhExplore.jsx

import React, { useEffect } from 'react';
import { PhnomPenhTourist } from '../../data/data';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../../components/common/Hero';
import Benner_pp from '../../assets/Images/Benner_pp-Explore.jpg';

const PhnomPenhExplore = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className="w-full bg-[#F7F6F0] text-[#2B2420] min-h-screen font-serif pb-24">
      {/* Hero Section - Removed top background space */}
      <div className="w-full">
        <Hero
          image={Benner_pp}
          title="Explore Phnom Penh"
          description="From ancient temples to vibrant markets and serene riverfronts, discover the heart of Cambodia's capital city."
          height="h-[45vh] md:h-[80vh]"
        />
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center" data-aos="fade-up">
        <div className="flex justify-center items-center mb-3">
          <span className="w-12 h-[2px] bg-[#6BCB52] mr-3"></span>
          <p className="text-[#558B2F] font-bold tracking-[0.25em] uppercase text-xs md:text-sm">
            Capital Destinations
          </p>
          <span className="w-12 h-[2px] bg-[#6BCB52] ml-3"></span>
        </div>
        <h2 className="font-['Fraunces'] text-3xl md:text-5xl font-extrabold text-[#3B6E32]">
          Must-Visit Places in Phnom Penh
        </h2>
        <p className="text-[#554A3E] font-['Work_Sans'] mt-3 max-w-xl mx-auto text-sm md:text-base">
          Explore iconic landmarks, rich historical sites, and bustling modern attractions in the capital.
        </p>
      </div>

      {/* Kampot-Inspired Wave Cards Grid (Keeping Original Card Design) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PhnomPenhTourist.map((place, index) => (
          <div
            key={place.id}
            className="bg-white rounded-0 overflow-hidden border border-[#E5E0D5] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group transform hover:-translate-y-1.5"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Container with Wave Bottom Style */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={place.imageUrl}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50"></div>
              
              {/* Circular Badge on Top-Left */}
              <div className="absolute top-4 left-4 w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-[#E5E0D5]">
                <Compass className="w-5 h-5 text-[#3B6E32]" />
              </div>

              {/* Category Tag on Top-Right */}
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#3B6E32] font-bold text-xs px-3 py-1.5 rounded-full shadow-md">
                {place.category}
              </span>

              {/* Decorative Wave/Curve SVG Overlay at the Bottom of Image */}
              <div className="absolute bottom-0 left-0 right-0 leading-none">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-6 text-white fill-current">
                  <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z"></path>
                </svg>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 pt-2 flex flex-col flex-grow justify-between bg-white">
              <div>
                <h3 className="font-['Fraunces'] text-xl md:text-2xl font-bold text-[#3B6E32] mb-2 group-hover:text-[#558B2F] transition-colors">
                  {place.name}
                </h3>
                <p className="font-['Work_Sans'] text-[#554A3E] text-sm line-clamp-2 leading-relaxed mb-6">
                  {place.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                <div className="flex items-center text-xs text-[#7A6F62] font-['Work_Sans']">
                  <MapPin className="w-3.5 h-3.5 text-[#3e8908] mr-1" />
                  <span className="text-[#439707]">Phnom Penh</span>
                </div>
                <Link
                  to={`/PhnomPenhExplore/${place.id}`}
                  className="inline-flex items-center gap-1.5 bg-[#6BCB52] hover:bg-[#58b342] text-gray-950 font-bold px-4 py-2 rounded-full text-xs md:text-sm transition-all duration-300 shadow-sm group-hover:shadow"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhnomPenhExplore;