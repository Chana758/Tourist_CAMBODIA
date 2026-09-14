import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import aboutwhy from '../../assets/Images/about_welcome.jpg';

const AuthModal = ({ initialTab = 'login', onClose }) => {
  const [tab, setTab] = useState(initialTab); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (email === 'test@gmail.com' && password === '123456') {
      localStorage.setItem('currentUser', JSON.stringify({ email }));
      onClose();
      window.location.reload();
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) return setError('Please fill in all fields.');
    if (password !== confirmPassword) return setError('Passwords do not match.');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find((u) => u.email === email)) return setError('Account already exists.');

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    setTab('login');
    setPassword('');
    setConfirmPassword('');
    setError('Account created — please log in.');
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-[820px] overflow-hidden grid grid-cols-1 md:grid-cols-2 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 shadow transition"
        >
          <IoCloseSharp className="text-xl" />
        </button>

        {/* Decorative side panel */}
        <div
          className="hidden md:flex relative flex-col justify-end p-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutwhy})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative text-white">
            <p className="text-sm uppercase tracking-widest text-[#c8e6a0] font-semibold mb-2">
              Discover Cambodia
            </p>
            <h3 className="text-2xl font-bold leading-snug">
              Your journey through the Kingdom of Wonder starts here.
            </h3>
          </div>
        </div>

        {/* Form side */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          {/* Tab switcher */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-8">
            <button
              onClick={() => { setTab('login'); setError(''); }}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === 'login' ? 'bg-[#8BC34A] text-white shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => { setTab('signup'); setError(''); }}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === 'signup' ? 'bg-[#8BC34A] text-white shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {tab === 'login' ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {tab === 'login'
              ? 'Log in to save trips and get personalized picks.'
              : 'Join us to start planning your Cambodia adventure.'}
          </p>

          {error && (
            <div className="mb-4 text-sm px-3 py-2 rounded-lg bg-red-50 text-red-600 border border-red-100">
              {error}
            </div>
          )}

          <form
            className="flex flex-col gap-4"
            onSubmit={tab === 'login' ? handleLogin : handleSignUp}
          >
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-200 rounded-xl outline-none focus:border-[#8BC34A] focus:ring-2 focus:ring-[#8BC34A]/20 transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-200 rounded-xl outline-none focus:border-[#8BC34A] focus:ring-2 focus:ring-[#8BC34A]/20 transition"
              required
            />
            {tab === 'signup' && (
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="p-3 border border-gray-200 rounded-xl outline-none focus:border-[#8BC34A] focus:ring-2 focus:ring-[#8BC34A]/20 transition"
                required
              />
            )}

            {tab === 'login' && (
              <div className="text-right -mt-2">
                <button type="button" className="text-xs text-[#8BC34A] font-medium hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="p-3 bg-[#8BC34A] text-white rounded-xl font-semibold hover:bg-[#7CB342] transition-colors shadow-sm"
            >
              {tab === 'login' ? 'Log In' : 'Create Account'}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm font-medium text-gray-700">
              <FaGoogle className="text-[#EA4335]" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-sm font-medium text-gray-700">
              <FaFacebook className="text-[#1877F2]" /> Facebook
            </button>
          </div>

          <p className="text-sm text-center mt-6 text-gray-500">
            {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => { setTab(tab === 'login' ? 'signup' : 'login'); setError(''); }}
              className="text-[#8BC34A] font-semibold hover:underline"
            >
              {tab === 'login' ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AuthModal;