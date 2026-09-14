import React from 'react';

const StatCard = ({ icon: Icon, value, label, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
    >
      <div className="flex flex-col items-center p-8 bg-white group-hover:bg-[#8BC34A] transition-all duration-300 transform group-hover:scale-105">
        {Icon && (
          <div className="mb-4">
            <Icon className="text-[#8BC34A] group-hover:text-white transition-colors duration-300" size={44} />
          </div>
        )}
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 group-hover:text-white transition-colors duration-300">
          {value}
        </h3>
        <p className="mt-2 text-gray-600 text-lg font-medium group-hover:text-white transition-colors duration-300">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatCard;