import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

const LoginModal = ({ onClose }) => {
  // Lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] px-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-7 rounded-2xl shadow-2xl w-full max-w-[400px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <IoCloseSharp
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-500 hover:text-gray-800"
        />
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:border-[#8BC34A]"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:border-[#8BC34A]"
          />
          <button
            type="submit"
            className="p-3 bg-[#8BC34A] text-white rounded-lg font-semibold hover:bg-[#7CB342] transition-colors"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#8BC34A] font-semibold" onClick={onClose}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>,
    document.body
  );
};

export default LoginModal;
