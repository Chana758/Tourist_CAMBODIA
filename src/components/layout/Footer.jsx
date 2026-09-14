
import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { LuExternalLink } from 'react-icons/lu';
import { MdTravelExplore } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#0D1F17] text-gray-200 pt-32 pb-16 px-6 md:px-12 lg:px-20 mt-40 border-t border-[#1B3828] font-poppins shadow-2xl overflow-hidden">
      
      {/* Radiant Glowing Background Effect */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-40 bg-[#8BC34A]/15 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Top Vibrant Emerald Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[4px] bg-gradient-to-r from-transparent via-[#8BC34A] to-transparent shadow-[0_0_15px_#8BC34A]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-20 border-b border-[#1B3828]">
        
        {/* Column 1 - Brand Info (Col span 4) */}
        <div className="lg:col-span-4 space-y-6">
          <Link to="/" className="inline-flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7CB342] to-[#8BC34A] flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-[#8BC34A]/30 group-hover:scale-105 transition-transform">
              🇰🇭
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-white leading-tight">
                Khmer<span className="text-[#8BC34A]">Journey</span>
              </span>
              <span className="text-[11px] text-[#A3E635] font-semibold tracking-widest uppercase">
                Cambodia Tourism
              </span>
            </div>
          </Link>

          <p className="text-gray-300 text-sm leading-relaxed pr-6 font-normal">
            Discover the wonders of Cambodia — from ancient temples to stunning beaches. Your unforgettable journey starts here with professional local guides.
          </p>

          <div className="flex items-center gap-3.5 pt-2">
            <a href="#" className="w-10 h-10 rounded-xl bg-[#142A1E] border border-[#234A34] hover:bg-[#8BC34A] hover:border-[#8BC34A] hover:text-gray-950 flex items-center justify-center text-gray-200 transition-all shadow-md">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-[#142A1E] border border-[#234A34] hover:bg-[#8BC34A] hover:border-[#8BC34A] hover:text-gray-950 flex items-center justify-center text-gray-200 transition-all shadow-md">
              <FaInstagram className="text-sm" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-[#142A1E] border border-[#234A34] hover:bg-[#8BC34A] hover:border-[#8BC34A] hover:text-gray-950 flex items-center justify-center text-gray-200 transition-all shadow-md">
              <FaYoutube className="text-sm" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-[#142A1E] border border-[#234A34] hover:bg-[#8BC34A] hover:border-[#8BC34A] hover:text-gray-950 flex items-center justify-center text-gray-200 transition-all shadow-md">
              <FaTelegramPlane className="text-sm" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links (Col span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center space-x-2.5">
            <LuExternalLink className="text-lg text-[#8BC34A]" />
            <h3 className="text-base font-bold text-white tracking-wide">Quick Links</h3>
          </div>
          <ul className="space-y-3.5 text-sm">
            <li><Link to="/" className="text-gray-300 hover:text-[#8BC34A] transition duration-200 block">Home</Link></li>
            <li><Link to="/provinces" className="text-gray-300 hover:text-[#8BC34A] transition duration-200 block">Provinces</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-[#8BC34A] transition duration-200 block">About Cambodia</Link></li>
            <li><Link to="/contect" className="text-gray-300 hover:text-[#8BC34A] transition duration-200 block">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 - Services (Col span 3) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center space-x-2.5">
            <MdTravelExplore className="text-lg text-[#8BC34A]" />
            <h3 className="text-base font-bold text-white tracking-wide">Services</h3>
          </div>
          <ul className="space-y-3.5 text-sm">
            <li><a href="#" className="text-gray-300 hover:text-[#8BC34A] transition duration-200 block">Tour Packages</a></li>
            <li><a href="#" className="hover:text-[#8BC34A] transition duration-200 block">Local Guides</a></li>
            <li><a href="#" className="hover:text-[#8BC34A] transition duration-200 block">Hotels & Resorts</a></li>
            <li><a href="#" className="hover:text-[#8BC34A] transition duration-200 block">Transportation & SIM</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info (Col span 3) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center space-x-2.5">
            <FiPhoneCall className="text-lg text-[#8BC34A]" />
            <h3 className="text-base font-bold text-white tracking-wide">Contact Info</h3>
          </div>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#142A1E] border border-[#234A34] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <FiMail className="text-[#8BC34A] text-xs" />
              </div>
              <span className="self-center">info@khmerjourney.com</span>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#142A1E] border border-[#234A34] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <FiPhoneCall className="text-[#8BC34A] text-xs" />
              </div>
              <span className="self-center">(+855) 97 232 5094</span>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#142A1E] border border-[#234A34] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <FiMapPin className="text-[#8BC34A] text-xs" />
              </div>
              <span className="self-center">Phnom Penh, Cambodia</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} KhmerJourney. All rights reserved.</p>
        <p className="flex items-center gap-2 bg-[#142A1E] border border-[#234A34] px-5 py-2.5 rounded-full text-gray-200 shadow-inner">
          Made with <span className="text-red-500">❤️</span> in Cambodia <span className="text-sm">🇰🇭</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;