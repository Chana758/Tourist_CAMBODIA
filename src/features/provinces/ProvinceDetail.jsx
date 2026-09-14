
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Ticket, MapPin, Sparkles, Compass } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { provincesConfig } from '../../config/provinces.config';

const DEFAULT_MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.898410988831!2d104.91740617441847!3d11.577640388622623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517e0ee5f7a9%3A0xe9fdbd8357e8f05a!2sWat%20Phnom!5e0!3m2!1sen!2skh!4v1697034509708!5m2!1sen!2skh';

const ProvinceDetail = () => {
  const { slug, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const province = provincesConfig[slug];
  const result = province?.data.find((p) => p.id === parseInt(id));

  if (!province || !result) {
    return (
      <div className="text-center py-32 text-gray-600 text-xl font-serif">
        Location not found.
      </div>
    );
  }

  return (
    <div className="font-serif bg-[#F7F6F0] text-[#2B2420] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[65vh] lg:h-[75vh] w-full overflow-hidden">
        <img
          src={result.imageUrl}
          alt={result.name}
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 md:left-12 z-20">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#6BCB52] backdrop-blur-md text-white hover:text-gray-950 font-bold text-sm rounded-full border border-white/20 transition-all duration-300 shadow-lg transform-gpu"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-16 max-w-5xl mx-auto z-10 text-white" data-aos="fade-up">
          <span className="self-start bg-[#6BCB52] text-gray-950 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm uppercase tracking-wider mb-4 shadow-md">
            {result.category || 'Attraction'}
          </span>
          <h1 className="font-['Fraunces'] text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
            {result.name}
          </h1>
          <p className="font-['Work_Sans'] text-gray-200 text-sm md:text-lg leading-relaxed max-w-3xl drop-shadow">
            {result.description}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-6 py-16" data-aos="fade-up">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-2">
            <span className="w-10 h-[2px] bg-[#6BCB52] mr-3"></span>
            <p className="text-[#558B2F] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Overview
            </p>
            <span className="w-10 h-[2px] bg-[#6BCB52] ml-3"></span>
          </div>
          <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-extrabold text-[#3B6E32]">
            About {result.name}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#E5E0D5] shadow-sm">
          <p className="font-['Work_Sans'] text-[#554A3E] leading-relaxed text-base md:text-lg mb-6">
            {result.content}
          </p>
          {result.tip && (
            <div className="flex items-start gap-3 bg-[#F0F7ED] border-l-4 border-[#6BCB52] p-4 rounded-r-xl">
              <Sparkles className="w-5 h-5 text-[#558B2F] flex-shrink-0 mt-0.5" />
              <p className="font-['Work_Sans'] text-[#3B6E32] text-sm md:text-base italic font-medium">
                {result.tip}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Info Grid Section */}
      <div className="max-w-5xl mx-auto px-6 pb-16" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Opening Hours', detail: result.openingHours || 'Everyday: 7:00 AM - 6:00 PM', icon: Clock },
            { title: 'Entrance Fee', detail: result.entranceFee || 'Foreigners: $1 USD • Locals: Free', icon: Ticket },
            { title: 'Address', detail: result.address || `${result.name}, Cambodia`, icon: MapPin },
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#E5E0D5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F0F7ED] flex items-center justify-center text-[#558B2F] mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-['Fraunces'] text-lg font-bold text-[#3B6E32] mb-2">{item.title}</h3>
                <p className="font-['Work_Sans'] text-[#554A3E] text-sm">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery Section */}
      {result.gallery?.length > 0 && (
        <div className="bg-[#EFECE6] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10" data-aos="fade-up">
              <div className="flex justify-center items-center mb-2">
                <span className="w-10 h-[2px] bg-[#6BCB52] mr-3"></span>
                <p className="text-[#558B2F] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                  Photo Gallery
                </p>
                <span className="w-10 h-[2px] bg-[#6BCB52] ml-3"></span>
              </div>
              <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-extrabold text-[#3B6E32]">
                Captured Moments
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {result.gallery.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl shadow-md border border-[#E5E0D5] bg-white group h-[260px]"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <img
                    src={img}
                    alt={`${result.name} ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-2">
            <span className="w-10 h-[2px] bg-[#6BCB52] mr-3"></span>
            <p className="text-[#558B2F] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Location Guide
            </p>
            <span className="w-10 h-[2px] bg-[#6BCB52] ml-3"></span>
          </div>
          <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-extrabold text-[#3B6E32]">
            Find Your Way Here
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E0D5] h-[40vh] lg:h-[50vh]">
          <iframe
            title={`${result.name} Map`}
            src={result.mapUrl || DEFAULT_MAP_URL}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#3B6E32] text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <Compass className="w-12 h-12 mx-auto text-[#6BCB52] mb-4 animate-bounce" />
          <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Visit {result.name}?
          </h2>
          <p className="font-['Work_Sans'] text-gray-200 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Plan your trip today and discover the breathtaking beauty and culture of {result.name}.
          </p>
          <Link to="/contect">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6BCB52] hover:bg-[#58b342] text-gray-950 font-bold text-base rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProvinceDetail;