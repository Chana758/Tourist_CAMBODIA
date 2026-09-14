
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Hero = ({
  image,
  title,
  description,
  showBack = true,
  height = 'h-[50vh] md:h-[60vh] lg:h-[80vh]',
  overlay = 'bg-gradient-to-b from-black/60 via-black/40 to-black/70',
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative bg-cover bg-center ${height} flex items-center justify-center text-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Premium Dark Gradient Overlay */}
      <div className={`absolute inset-0 ${overlay}`}></div>

      <div className="relative z-10 px-4 max-w-4xl text-white" data-aos="fade-up">
        <h1
          className="font-['Fraunces'] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight drop-shadow-lg"
          data-aos="fade-down"
        >
          {title}
        </h1>

        {description && (
          <p
            className="font-['Work_Sans'] text-base md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto drop-shadow-md mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {description}
          </p>
        )}

        {showBack && (
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#6BCB52] hover:bg-[#58b342] text-gray-950 font-bold text-sm rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;