import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../../components/common/Hero';
import { provincesConfig } from '../../config/provinces.config';

// គម្របគែមប័ណ្ណប្រៃសណីយ៍ (Postcard torn-edge effect)
const TORN_EDGE = {
  clipPath:
    'polygon(0% 0%, 100% 0%, 100% 96%, 95% 100%, 90% 96%, 85% 100%, 80% 96%, 75% 100%, 70% 96%, 65% 100%, 60% 96%, 55% 100%, 50% 96%, 45% 100%, 40% 96%, 35% 100%, 30% 96%, 25% 100%, 20% 96%, 15% 100%, 10% 96%, 5% 100%, 0% 96%)',
};

const ProvinceList = () => {
  const { slug } = useParams();
  const province = provincesConfig[slug];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  if (!province) {
    return (
      <div className="text-center py-32 text-gray-600 text-xl font-serif">
        Province not found.
      </div>
    );
  }

  // ទាញយកឈ្មោះខេត្តសុទ្ធ ជៀសវាងការជាន់ពាក្យ
  const rawTitle = province.title || slug;
  const cleanTitle = rawTitle.replace(/^Explore\s+/i, '');

  return (
    <div className="font-serif bg-[#F7F6F0] min-h-screen pb-24">
      {/* Hero Section */}
      <Hero 
        image={province.banner} 
        title={`Explore ${cleanTitle}`} 
        description={province.description} 
      />

      {/* Modern Minimalist Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center my-16" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#3B6E32]/10 border border-[#3B6E32]/20">
          <MapPin className="w-3.5 h-3.5 text-[#3B6E32]" />
          <span className="text-[#3B6E32] font-semibold tracking-widest uppercase text-xs">
            Featured Destinations
          </span>
        </div>
        
        <h2 className="font-['Fraunces'] text-3xl md:text-5xl font-extrabold text-[#2B2420] tracking-tight mb-4">
          Discover the Wonders of <span className="text-[#3B6E32] underline decoration-[#6BCB52]/40 decoration-wavy underline-offset-8">{cleanTitle}</span>
        </h2>
        
        <p className="font-['Work_Sans'] text-[#6B5E51] text-base leading-relaxed max-w-2xl mx-auto">
          Immerse yourself in the breathtaking landscapes, rich culture, and hidden historical gems across {cleanTitle}.
        </p>
      </div>

      {/* Postcard Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {province.data?.map((place, index) => {
            // បំបែកពាក្យទីមួយ និងពាក្យបន្ទាប់ ដើម្បីដាក់ស្ទីលពណ៌ផ្សេងគ្នា
            const nameParts = place.name.split(' ');
            const firstName = nameParts[0];
            const restName = nameParts.slice(1).join(' ');

            return (
              <div
                key={place.id}
                className="group relative bg-white border border-[#E5E0D5] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Stamp Badge */}
                <div className="absolute top-3 left-3 z-20 -rotate-6 w-14 h-14 rounded-full border-2 border-dashed border-[#3B6E32] bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <span className="font-['Fraunces'] text-[10px] font-bold text-center text-[#3B6E32] px-1">
                    {place.category || 'Highlight'}
                  </span>
                </div>

                {/* Torn-edge Image */}
                <div className="relative overflow-hidden bg-gray-100" style={TORN_EDGE}>
                  <img
                    src={place.imageUrl}
                    alt={place.name}
                    className="w-full h-56 object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    {/* ស្ទីលពណ៌អក្សរឈ្មោះកន្លែង៖ ពាក្យដំបូងពណ៌ខាប់ធម្មតា ពាក្យក្រោយពណ៌បៃតងប្រណិត និងដូរពណ៌ពេល Hover */}
                    <h3 className="font-['Fraunces'] text-xl font-bold text-[#2B2420] transition-colors mb-2">
                      <span className="group-hover:text-[#3B6E32] transition-colors duration-300">{firstName}</span>{' '}
                      <span className="text-[#3B6E32] group-hover:text-[#2E5826] transition-colors duration-300">{restName}</span>
                    </h3>
                    <p className="font-['Work_Sans'] text-[#6B5E51] text-sm leading-relaxed line-clamp-3 mb-6">
                      {place.description}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-[#F0ECE1]">
                    <span className="block h-[2px] w-6 bg-[#3B6E32] transition-all duration-300 group-hover:w-12 mb-3" />
                    <Link
                      to={`/provinces/${slug}/${place.id}`}
                      className="inline-flex items-center gap-2 font-['Work_Sans'] text-sm font-bold text-[#3B6E32] hover:text-[#2E5826] transition-colors"
                    >
                      <span>Explore Place</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProvinceList;