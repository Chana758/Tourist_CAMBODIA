
import React, { useEffect, useState } from 'react';
import { Check, ArrowRight, Sparkles, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import ben1 from '../../assets/Images/Bennerkrom.jpg';
import ben2 from '../../assets/Images/Benner_1.jpg';
import ben4 from '../../assets/Images/Bennerpic2.jpg';
import ben5 from '../../assets/Images/Bennerpic3.jpg';
import ben7 from '../../assets/Images/Bennerpic5.jpg';

const BENEFITS = [
  'Currency exchange & Tourist SIM cards',
  'Explore ancient temples & attractions',
  'Special local restaurants & cozy cafés',
  'Luxury spa and relaxing massage',
  'Unique cultural experiences & activities',
  'High-quality transportation & hotels',
];

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden flex items-center font-poppins py-10">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={ben1}
          alt="Cambodia Landscape"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* LEFT: Content inside a Clean Solid/Glass Card */}
        <div
          className={`lg:col-span-7 bg-white/95 backdrop-blur-2xl border border-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8BC34A]/15 border border-[#8BC34A]/30 text-[#558B2F] font-bold text-xs tracking-widest uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-[#8BC34A]" /> Discover Kingdom of Wonder
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Your Life Map!
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BC34A] to-[#33691E]">
                Discover Cambodia
              </span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              Save time & enjoy 50+ exclusive tourism services across the country
              with seamless, unforgettable local experiences.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {BENEFITS.map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#8BC34A] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                </div>
                <span className="text-xs font-semibold text-gray-700 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link to="/provinces" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#8BC34A] to-[#689F38] text-white font-bold text-sm px-7 py-3.5 rounded-2xl hover:shadow-xl hover:shadow-[#8BC34A]/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                Explore Destinations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button className="flex-1 sm:flex-initial bg-gray-900 text-white px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 hover:bg-black transition-all shadow-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="App Store" className="w-4 h-4" />
                <div className="text-left leading-none">
                  <div className="text-[9px] text-gray-400">Download on</div>
                  <div className="text-[11px] font-semibold mt-0.5">App Store</div>
                </div>
              </button>
              <button className="flex-1 sm:flex-initial bg-gray-900 text-white px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 hover:bg-black transition-all shadow-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/1856px-Google_Play_2022_icon.svg.png" alt="Google Play" className="w-4 h-4 object-contain" />
                <div className="text-left leading-none">
                  <div className="text-[9px] text-gray-400">Get it on</div>
                  <div className="text-[11px] font-semibold mt-0.5">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Bento image grid + floating badges */}
        <div
          className={`lg:col-span-5 relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white/90 group">
                <img src={ben2} alt="Tour 1" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white/90 group">
                <img src={ben4} alt="Tour 2" className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white/90 group">
                <img src={ben7} alt="Tour 3" className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white/90 group">
                <img src={ben5} alt="Tour 4" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>

          {/* Floating rating badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-gray-100">
            <div className="flex -space-x-2">
              {[ben2, ben4, ben7].map((src, i) => (
                <img key={i} src={src} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-extrabold text-gray-900">4.9</span>
              </div>
              <p className="text-[10px] text-gray-500 font-medium">1000+ Happy Travelers</p>
            </div>
          </div>

          {/* Floating destination badge */}
          <div className="hidden md:flex absolute -top-4 -right-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl px-4 py-2.5 items-center gap-2.5 border border-gray-100">
            <div className="w-7 h-7 rounded-full bg-[#8BC34A]/15 flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5 text-[#689F38]" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-gray-900 leading-none">25</p>
              <p className="text-[9px] text-gray-500 font-medium">Provinces</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;