// features/provinces/ProvinceOverview.jsx

import React, { useEffect } from 'react';
import { provinceCards } from '../../data/data';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../../components/common/Hero';
import benner_province from '../../assets/Images/Benner_Province.jpg';

// Deckled / torn-edge mask for the photo, echoing a postcard print.
const TORN_EDGE = {
  clipPath:
    'polygon(0% 0%, 100% 0%, 100% 96%, 95% 100%, 90% 96%, 85% 100%, 80% 96%, 75% 100%, 70% 96%, 65% 100%, 60% 96%, 55% 100%, 50% 96%, 45% 100%, 40% 96%, 35% 100%, 30% 96%, 25% 100%, 20% 96%, 15% 100%, 10% 96%, 5% 100%, 0% 96%)',
};

const ProvinceOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className="font-serif md:mb-16 px-0 py-1 md:px-0 md:py-0 bg-[#F7F6F0] min-h-screen">
      <Hero
        image={benner_province}
        title="All 24 Provinces of Cambodia"
        description="From ancient temples to pristine beaches, explore every corner of this beautiful kingdom."
        height="h-[50vh] md:h-[60vh] lg:h-[80vh]"
      />

      {/* Title Section - លេងស្ទីលអក្សរចំកណ្តាល ពាក់កណ្តាលពណ៌បៃតងប្រណិត */}
      <div className="text-center max-w-3xl mx-auto px-4 my-16" data-aos="fade-up">
        <div className="inline-block px-4 py-1 mb-3 rounded-full bg-[#6BCB52]/10 border border-[#6BCB52]/30">
          <span className="text-[#4E8D3D] font-bold tracking-[0.25em] uppercase text-xs">
            ✦ Explore Destinations ✦
          </span>
        </div>
        <h2 className="font-['Fraunces'] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2B2420] tracking-tight mb-4">
          Provinces of <span className="text-[#3B6E32] underline decoration-[#6BCB52]/50 decoration-wavy decoration-1 underline-offset-8">Cambodia</span>
        </h2>
        <p className="font-['Work_Sans'] text-[#6B5E51] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          From ancient temples to pristine coastal retreats, discover the unique culture, hidden gems, and breathtaking landscapes across all 24 provinces.
        </p>
      </div>

      {/* Province Cards — postcard style (ទម្រង់កាតទុកដដែលអត់ដូរទេ) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {provinceCards.map((province, index) => (
            <div
              key={province.id}
              className="group relative bg-white rounded-0 border border-[#E5E0D5] shadow-[0_10px_25px_rgba(43,36,32,0.05)] hover:shadow-[0_20px_40px_rgba(107,203,82,0.2)] pb-5 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              {/* Postmark badge, stamped over the photo corner */}
              <div className="absolute top-3 left-3 z-20 -rotate-6 w-16 h-16 rounded-full border-2 border-dashed border-[#558B2F] bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                <span className="font-['Fraunces'] text-[11px] font-bold leading-tight text-center text-[#558B2F] px-1">
                  {province.category || 'Cambodia'}
                </span>
              </div>

              {/* Photo with torn bottom edge */}
              <div className="relative overflow-hidden bg-gray-100" style={TORN_EDGE}>
                <img
                  src={province.imageUrl}
                  alt={province.name}
                  className="w-full h-56 object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Caption block */}
              <div className="px-5 pt-3 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="font-['Fraunces'] text-2xl font-bold text-[#3B6E32] group-hover:text-[#2E5826] transition-colors mb-1.5">
                    {province.name}
                  </h2>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-md bg-[#6BCB52]/15 flex items-center justify-center flex-shrink-0">
                      <Compass className="w-3.5 h-3.5 text-[#4E8D3D]" />
                    </div>
                    <span className="font-['Work_Sans'] text-sm font-semibold tracking-wide text-[#4E8D3D]">
                      {province.names}
                    </span>
                  </div>

                  <p className="font-['Work_Sans'] text-[#554A3E] text-sm leading-relaxed line-clamp-2">
                    {province.description}
                  </p>
                </div>

                {/* Accent line and Explore Link */}
                <div className="mt-5 pt-3 border-t border-[#F0ECE1]">
                  <span className="block h-[2px] w-8 bg-[#6BCB52] transition-all duration-300 group-hover:w-16" />
                  <div className="mt-3 flex items-center justify-between">
                    <Link
                      to={province.linkUrl}
                      className="inline-flex items-center gap-1.5 font-['Work_Sans'] text-sm font-bold text-[#4E8D3D] hover:text-[#3B6E32] transition-colors duration-300"
                    >
                      <span>Explore {province.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvinceOverview;