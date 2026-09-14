
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PiAirplaneTiltBold } from 'react-icons/pi';
import { FaRegCalendarTimes } from 'react-icons/fa';
import { AiOutlineDollar, AiOutlineExclamationCircle } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../../components/common/Hero';
import benner from '../../assets/Images/Benner_about.jpg';
import aboutwhy from '../../assets/Images/about_welcome.jpg';

const TRAVEL_TIPS = [
  {
    icon: <PiAirplaneTiltBold size={40} className="text-blue-600" />,
    title: 'Getting There',
    text: 'Main airports: Phnom Penh (PNH) & Siem Reap (REP). Visa on arrival available.',
    detail:
      'Airlines: Direct flights from major Asian cities, connecting flights from Europe & Americas. Main airports are Phnom Penh International Airport (PNH) and Siem Reap International Airport (REP). Visa on arrival is available for most nationalities ($30 USD for 30 days).',
  },
  {
    icon: <FaRegCalendarTimes size={40} className="text-purple-600" />,
    title: 'Best Time to Visit',
    text: 'Dry season: Nov–Apr, Wet season: May–Oct, Peak season: Dec–Feb',
    detail:
      'Dry Season (Nov–Apr) is ideal for temple visits and outdoor activities. Wet Season (May–Oct) offers lush greenery, fewer tourists, and lower prices. Peak Season (Dec–Feb) is cooler and perfect for sightseeing.',
  },
  {
    icon: <AiOutlineDollar size={40} className="text-yellow-500" />,
    title: 'Budget & Currency',
    text: 'Currency: KHR & USD. Budget $30–50/day, $100+/day for comfort',
    detail:
      'The Cambodian Riel (KHR) is the local currency, but US dollars are widely accepted. Budget travelers: $30–50/day; mid-range: $100+/day. Tipping is optional but appreciated (10% in restaurants).',
  },
  {
    icon: <SlLocationPin size={40} className="text-green-600" />,
    title: 'Getting Around',
    text: 'Tuk-tuks, buses, and domestic flights for travel',
    detail:
      'Tuk-tuks are popular for short distances ($1–5). Buses are comfortable for intercity travel ($5–15). Domestic flights are convenient for connecting major cities quickly.',
  },
  {
    icon: <AiOutlineExclamationCircle size={40} className="text-red-600" />,
    title: 'Health & Safety',
    text: 'Vaccinations, water safety, and general precautions',
    detail:
      'Recommended vaccinations: Hepatitis A, Typhoid. Drink bottled water only. Cambodia is generally safe, but use common sense precautions when traveling.',
  },
  {
    icon: <GiForkKnifeSpoon size={40} className="text-orange-500" />,
    title: 'Food & Dining',
    text: 'Must-try dishes & street food',
    detail:
      'Must-try: Fish Amok, Lok Lak, Num Banh Chok. Street food is delicious and affordable ($1–3 per meal). Restaurants range from local Khmer to international cuisine.',
  },
];

const AboutCambodia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [openTip, setOpenTip] = useState(null);

  return (
    <div className="font-sans">
      <Hero
        image={benner}
        title="About Cambodia"
        description="The Kingdom of Wonder — a land of ancient temples, rich culture, and warm hospitality."
        height="h-[60vh] md:h-[90vh]"
      />

      {/* About Content */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 flex justify-center" data-aos="fade-right">
            <img
              src={aboutwhy}
              alt="Angkor Wat"
              className="w-[90%] h-[420px] object-cover rounded-0 shadow-lg"
            />
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
            <h5 className="text-amber-600 uppercase font-semibold tracking-widest mb-2">About Us</h5>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-amber-600">Cambodia</span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cambodia, officially the Kingdom of Cambodia, is a country in Southeast Asia known for
              its rich history, stunning architecture, and vibrant culture. Home to the magnificent
              Angkor Wat temple complex, Cambodia offers visitors an unforgettable journey through time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With 25 diverse provinces, each offering unique experiences, Cambodia captivates
              travelers with its natural beauty, ancient heritage, and the warmth of its people.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 text-gray-700">
              <ul className="space-y-2">
                <li>🌍 Rich Cultural Heritage</li>
                <li>🏯 Ancient Temples</li>
                <li>🌴 25 Diverse Provinces</li>
              </ul>
              <ul className="space-y-2">
                <li>🏖️ Beautiful Landscapes</li>
                <li>🚗 Easy Travel Access</li>
                <li>🤝 Friendly People</li>
              </ul>
            </div>

            <Link to="/contect">
              <button className="bg-amber-600 text-white px-6 py-2 rounded-md font-medium hover:bg-amber-700 transition duration-200">
                Contact Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Info Cards + History */}
      <div className="bg-white text-[#8BC34A] px-6 md:px-16 py-10 flex flex-col items-center" data-aos="fade-up">
        <div className="flex flex-wrap justify-center gap-6 mb-12 w-full max-w-6xl">
          {[
            { title: 'Geography', text: 'Located in Southeast Asia, bordered by Thailand, Laos, and Vietnam, with a coastline along the Gulf of Thailand.' },
            { title: 'Culture', text: 'Rich Khmer heritage influenced by Hinduism and Buddhism, reflected through art, dance, and architecture.' },
            { title: 'Language', text: 'Khmer is the official language, with English and French commonly used in tourist areas.' },
          ].map((card, i) => (
            <div
              key={i}
              className="flex-1 min-w-[250px] max-w-sm p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-6xl text-start shadow-lg rounded-sm py-5 px-10 md:py-5 md:px-5 hover:shadow-2xl transition-all duration-300" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4 text-[#8BC34A]">A Rich History</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cambodia's history spans over two millennia, with the Khmer Empire reaching its peak
            between the 9th and 15th centuries. During this golden age, the magnificent temples of
            Angkor were constructed, showcasing the brilliance of Khmer civilization.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, Cambodia honors its past while embracing the future — a nation defined by
            resilience and warmth.
          </p>
        </div>
      </div>

      {/* Travel Tips */}
      <div className="bg-gray-100 py-16 px-6 md:px-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          <span className="text-[#8BC34A]"> Travel Tips</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TRAVEL_TIPS.map((tip, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
              onClick={() => setOpenTip(i)}
            >
              <div className="flex justify-center mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.text}</p>
            </div>
          ))}
        </div>

        {openTip !== null && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setOpenTip(null)}
          >
            <div className="bg-white rounded-xl max-w-xl w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
                onClick={() => setOpenTip(null)}
              >
                ×
              </button>
              <div className="flex justify-center mb-4">{TRAVEL_TIPS[openTip].icon}</div>
              <h3 className="text-2xl font-bold mb-4">{TRAVEL_TIPS[openTip].title}</h3>
              <p className="text-gray-700">{TRAVEL_TIPS[openTip].detail}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutCambodia;
