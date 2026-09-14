import React, { useState, useEffect } from 'react';
import { FaRegUser, FaBars } from 'react-icons/fa';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AllDataprovice, menu } from '../../data/data';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [opensidebar, setOpensidebar] = useState(false);
  const [opensearch, setOpensearch] = useState(false);
  const [authModal, setAuthModal] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchData, setSearchData] = useState('');
  const navigate = useNavigate();

  const filteredProducts = AllDataprovice.filter((s) => {
    const query = searchData.toLowerCase().trim();
    return (
      s.name.toLowerCase().includes(query) ||
      (s.category && s.category.toLowerCase().includes(query))
    );
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative text-[14px] font-medium px-4 py-2 rounded-full transition-all duration-300 ${
      isActive
        ? 'text-[#8BC34A] bg-[#8BC34A]/10 font-semibold shadow-sm'
        : 'text-gray-600 hover:text-[#8BC34A] hover:bg-gray-100/60'
    }`;

  return (
    <div className="w-full sticky top-0 z-50 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300 font-poppins">
      {/* Main Glass Navbar Container */}
      <div className="max-w-7xl mx-auto h-[76px] px-6 flex justify-between items-center bg-white/85 backdrop-blur-xl border border-white/40 shadow-lg shadow-gray-200/50 rounded-2xl transition-all">
        
        {/* 1. Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7CB342] to-[#8BC34A] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-[#8BC34A]/30 group-hover:scale-105 transition-transform">
            🇰🇭
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-gray-900 leading-tight">
              Khmer<span className="text-[#8BC34A]">Journey</span>
            </span>
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
              Cambodia Tourism
            </span>
          </div>
        </Link>

        {/* 2. Desktop Menu */}
        <ul className="lg:flex hidden gap-1.5 items-center bg-gray-50/80 border border-gray-100 px-2 py-1 rounded-full shadow-inner">
          {menu.map((u) => (
            <li key={u.id}>
              <NavLink to={u.link} className={navLinkClass}>
                {u.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 3. Actions (Search & Login) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpensearch(!opensearch)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100/80 text-gray-700 hover:bg-[#8BC34A] hover:text-white transition-all shadow-sm"
          >
            <IoSearch className="text-lg" />
          </button>

          <button
            onClick={() => setAuthModal('login')}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-[#8BC34A] text-white hover:bg-[#7CB342] transition-all shadow-md shadow-[#8BC34A]/20 hover:shadow-lg active:scale-95"
          >
            <FaRegUser className="text-xs" /> Login
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setOpensidebar(!opensidebar)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-800"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </div>

      {/* Clean Dropdown Search Box (Attached right below the navbar) */}
      {opensearch && (
        <div className="max-w-2xl mx-auto mt-3 bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-2xl shadow-2xl p-4 transition-all animate-fadeIn z-50 relative">
          <div className="relative flex items-center">
            <IoSearch className="absolute left-4 text-gray-400 text-lg" />
            <input
              onChange={(e) => setSearchData(e.target.value)}
              value={searchData}
              type="text"
              placeholder="Find places to visit in Cambodia..."
              className="w-full h-[46px] bg-gray-50 border border-gray-200 px-11 rounded-xl
                text-sm text-gray-800 placeholder-gray-400 focus:border-[#8BC34A] focus:bg-white
                outline-none transition-all shadow-inner"
              autoFocus
            />
            <button
              onClick={() => {
                setOpensearch(false);
                setSearchData('');
              }}
              className="absolute right-3 w-7 h-7 rounded-full bg-gray-200/60 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all"
            >
              <IoCloseSharp className="text-sm" />
            </button>
          </div>

          {searchData.trim() !== '' && (
            <ul className="mt-3 max-h-[240px] overflow-y-auto divide-y divide-gray-100">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      navigate(`${p.linkUrl}`);
                      setOpensearch(false);
                      setSearchData('');
                    }}
                    className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-10 h-10 object-cover rounded-lg border shadow-sm"
                    />
                    <div className="flex-1">
                      <h1 className="text-sm font-semibold text-gray-800">{p.name}</h1>
                      <p className="text-xs text-gray-500">{p.category}</p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-gray-400 text-center py-4 text-sm">The place you are looking for could not be found.</li>
              )}
            </ul>
          )}
        </div>
      )}

      {/* Sidebar (Mobile) */}
      <div
        className={`w-[80%] max-w-[325px] pt-6 h-full fixed z-50 top-0 left-0 bg-gray-900 text-white lg:hidden shadow-2xl
          ${opensidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full px-6 flex items-center justify-between pb-5 border-b border-white/10">
          <Link to="/" className="text-xl font-bold text-[#8BC34A] flex items-center gap-2">
            🇰🇭 KhmerJourney
          </Link>
          <button onClick={() => setOpensidebar(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <IoCloseSharp className="text-white text-lg" />
          </button>
        </div>

        <ul className="mt-4 px-4 space-y-1">
          {menu.map((u) => (
            <li key={u.id}>
              <NavLink
                to={u.link}
                onClick={() => setOpensidebar(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-[15px] font-medium rounded-xl transition-all ${
                    isActive ? 'bg-[#8BC34A] text-white shadow-md' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {u.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-5 mt-8">
          <button
            onClick={() => {
              setAuthModal('login');
              setOpensidebar(false);
            }}
            className="w-full py-3 bg-[#8BC34A] text-white font-semibold rounded-full shadow-lg hover:bg-[#7CB342] transition-colors"
          >
            Login
          </button>
        </div>
      </div>

      {opensidebar && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setOpensidebar(false)}
        />
      )}

      {authModal && (
        <AuthModal initialTab={authModal} onClose={() => setAuthModal(null)} />
      )}
    </div>
  );
};

export default Navbar;