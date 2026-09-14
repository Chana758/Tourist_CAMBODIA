// features/phnompenh/PhnomPenhExploreDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PhnomPenhTourist } from '../../data/data';
import { ArrowLeft, MapPin, Clock, Ticket, Sparkles, Navigation } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhnomPenhExploreDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
    const foundPlace = PhnomPenhTourist.find((item) => item.id.toString() === id);
    setPlace(foundPlace);
    window.scrollTo(0, 0);
  }, [id]);

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F6F0] font-serif text-[#3B6E32]">
        <h2 className="text-2xl font-bold">Destination not found...</h2>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F7F6F0] text-[#2B2420] min-h-screen font-serif pb-24">
      {/* Hero Banner Section with Back Button */}
      <div className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

        {/* Floating Back Button */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#3B6E32] font-bold px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 text-sm transform hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute bottom-10 left-6 md:left-16 right-6 max-w-5xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-[#6BCB52] text-gray-950 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{place.category}</span>
          </div>
          <h1 className="font-['Fraunces'] text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            {place.name}
          </h1>
          <p className="font-['Work_Sans'] text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed">
            {place.description}
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        {/* Info Cards Grid (Opening Hours, Ticket, Address) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
          {/* Opening Hours */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E0D5] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#6BCB52]/20 flex items-center justify-center text-[#3B6E32] flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A6F62] font-['Work_Sans'] font-semibold">Opening Hours</p>
              <p className="text-[#2B2420] font-bold text-sm md:text-base mt-0.5">{place.openingHours || "Everyday: 7:00 AM - 6:00 PM"}</p>
            </div>
          </div>

          {/* Entrance Fee */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E0D5] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#6BCB52]/20 flex items-center justify-center text-[#3B6E32] flex-shrink-0">
              <Ticket className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A6F62] font-['Work_Sans'] font-semibold">Entrance Fee</p>
              <p className="text-[#2B2420] font-bold text-sm md:text-base mt-0.5">{place.entranceFee || "Foreigners: $1 USD - Locals: Free"}</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E5E0D5] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#6BCB52]/20 flex items-center justify-center text-[#3B6E32] flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#7A6F62] font-['Work_Sans'] font-semibold">Address</p>
              <p className="text-[#2B2420] font-bold text-sm md:text-base mt-0.5">{place.address || "Phnom Penh, Cambodia"}</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E5E0D5] mb-12" data-aos="fade-up">
          <div className="flex items-center mb-6">
            <span className="w-8 h-[2px] bg-[#6BCB52] mr-3"></span>
            <h2 className="font-['Fraunces'] text-2xl md:text-3xl font-bold text-[#3B6E32]">
              About {place.name}
            </h2>
          </div>
          <p className="font-['Work_Sans'] text-[#554A3E] text-base md:text-lg leading-relaxed mb-6">
            {place.longDescription || place.description}
          </p>
          <div className="p-4 bg-[#F7F6F0] rounded-2xl border-l-4 border-[#6BCB52]">
            <p className="font-['Work_Sans'] text-sm text-[#4E8D3D] font-medium">
              💡 Visitor Tip: Visitors are advised to dress modestly and visit early in the morning to avoid crowds and enjoy the serene atmosphere.
            </p>
          </div>
        </div>

        {/* Gallery Section (If available) */}
        {place.gallery && place.gallery.length > 0 && (
          <div className="mb-12" data-aos="fade-up">
            <div className="text-center mb-8">
              <h3 className="font-['Fraunces'] text-2xl md:text-4xl font-bold text-[#3B6E32]">Gallery</h3>
              <p className="text-[#554A3E] font-['Work_Sans'] text-sm mt-2">Visual highlights of {place.name}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {place.gallery.map((img, idx) => (
                <div key={idx} className="h-64 rounded-2xl overflow-hidden shadow-md group">
                  <img src={img} alt="gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Location Map Section */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#E5E0D5] mb-16" data-aos="fade-up">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="w-8 h-[2px] bg-[#6BCB52] mr-3"></span>
              <h3 className="font-['Fraunces'] text-2xl md:text-3xl font-bold text-[#3B6E32]">Location</h3>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(place.name + ' Phnom Penh')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#3B6E32] hover:text-[#58b342] bg-[#6BCB52]/20 px-4 py-2 rounded-full transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Maps</span>
            </a>
          </div>
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-[#E5E0D5] bg-gray-100">
            <iframe
              title="map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(place.name + ' Phnom Penh')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Call to Action Plan Trip */}
        <div className="bg-[#3B6E32] rounded-3xl p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden" data-aos="fade-up">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          <h3 className="font-['Fraunces'] text-3xl md:text-4xl font-extrabold mb-3">
            Ready to Visit {place.name}?
          </h3>
          <p className="font-['Work_Sans'] text-gray-200 text-sm md:text-base max-w-xl mx-auto mb-8">
            Plan your trip today and discover the beauty and historical significance of this landmark.
          </p>
          <button
            onClick={() => alert("Trip planned successfully!")}
            className="bg-[#6BCB52] hover:bg-[#58b342] text-gray-950 font-bold px-8 py-3.5 rounded-full text-base transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Plan Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhnomPenhExploreDetail;