
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaMountain, FaUsers, FaUmbrellaBeach, FaSmileBeam, FaStar } from 'react-icons/fa';
import StatCard from '../../components/ui/StatCard';

const STATS = [
  { id: 1, icon: FaMapMarkerAlt, value: '25', label: 'Provinces & Cities' },
  { id: 2, icon: FaMountain, value: '1000+', label: 'Tourist Attractions' },
  { id: 3, icon: FaUsers, value: '17M', label: 'Population' },
  { id: 4, icon: FaUmbrellaBeach, value: '50+', label: 'Amazing Destinations' },
  { id: 5, icon: FaSmileBeam, value: '1000+', label: 'Happy Travelers' },
  { id: 6, icon: FaStar, value: '4.9★', label: 'Average Rating' },
];

const FunStats = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: 'ease-out-cubic' });
  }, []);

  return (
    <section className="bg-neutral-50 py-20 lg:mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {STATS.map((stat, index) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default FunStats;
