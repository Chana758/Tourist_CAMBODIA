import React, { useEffect } from 'react';
import { discoverCards } from '../../data/data';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// គម្របគែមប័ណ្ណប្រៃសណីយ៍ (Postcard torn-edge effect)
const TORN_EDGE = {
  clipPath:
    'polygon(0% 0%, 100% 0%, 100% 96%, 95% 100%, 90% 96%, 85% 100%, 80% 96%, 75% 100%, 70% 96%, 65% 100%, 60% 96%, 55% 100%, 50% 96%, 45% 100%, 40% 96%, 35% 100%, 30% 96%, 25% 100%, 20% 96%, 15% 100%, 10% 96%, 5% 100%, 0% 96%)',
};

const PopularDestinations = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const cards = [
    ...(discoverCards || []).slice(0, 3),
    {
      id: 4,
      title: 'Contact Us',
      description: 'Get in touch with us to plan your Cambodian adventure.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000',
      linkUrl: '/contect',
      buttonText: 'Contact Us',
      category: 'Information',
    },
  ];

  return (
    <div className="w-full bg-[#F7F6F0] py-16 px-4 sm:px-6 lg:px-8 mt-2 font-serif">
      {/* Title Section */}
      <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#3B6E32]/10 border border-[#3B6E32]/20">
          <MapPin className="w-3.5 h-3.5 text-[#3B6E32]" />
          <span className="text-[#3B6E32] font-semibold tracking-widest uppercase text-xs font-['Work_Sans']">
            Destination Highlights
          </span>
        </div>
        
        <h2 className="font-['Fraunces'] text-3xl md:text-5xl font-extrabold text-[#2B2420] tracking-tight mb-4">
          Popular <span className="text-[#3B6E32] underline decoration-[#6BCB52]/40 decoration-wavy underline-offset-8">Destination</span>
        </h2>
        
        <p className="font-['Work_Sans'] text-[#6B5E51] text-base leading-relaxed max-w-xl mx-auto">
          Explore the most iconic locations and hidden gems handpicked for your next journey in Cambodia.
        </p>
      </div>

      {/* Cards Container — កែសម្រួលដាក់ Flex និង justify-center ដើម្បីឱ្យនៅចំកណ្តាលស្អាត */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const nameParts = (card.title || '').split(' ');
            const firstName = nameParts[0];
            const restName = nameParts.slice(1).join(' ');

            return (
              <div
                key={card.id}
                className="group relative bg-white border border-[#E5E0D5] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden w-full sm:w-[48%] lg:w-[23%] min-w-[260px]"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                {/* Stamp Badge */}
                <div className="absolute top-3 left-3 z-20 -rotate-6 w-14 h-14 rounded-full border-2 border-dashed border-[#3B6E32] bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <span className="font-['Fraunces'] text-[10px] font-bold text-center text-[#3B6E32] px-1">
                    {card.category || 'Highlight'}
                  </span>
                </div>

                {/* Torn-edge Image */}
                <div className="relative overflow-hidden bg-gray-100" style={TORN_EDGE}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-56 object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-['Fraunces'] text-xl font-bold text-[#2B2420] transition-colors mb-2">
                      <span className="group-hover:text-[#3B6E32] transition-colors duration-300">{firstName}</span>{' '}
                      <span className="text-[#3B6E32] group-hover:text-[#2E5826] transition-colors duration-300">{restName}</span>
                    </h3>
                    <p className="font-['Work_Sans'] text-[#6B5E51] text-sm leading-relaxed line-clamp-3 mb-6">
                      {card.id === 4
                        ? card.description
                        : card.description || 'Discover the vibrant blend of culture, history, and modern life.'}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-[#F0ECE1]">
                    <span className="block h-[2px] w-6 bg-[#3B6E32] transition-all duration-300 group-hover:w-12 mb-3" />
                    <Link
                      to={card.linkUrl || '#'}
                      className="inline-flex items-center gap-2 font-['Work_Sans'] text-sm font-bold text-[#3B6E32] hover:text-[#2E5826] transition-colors"
                    >
                      <span>{card.buttonText || 'Explore Place'}</span>
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

export default PopularDestinations;