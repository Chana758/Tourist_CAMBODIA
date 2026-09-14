import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email || !password) return alert('Enter email & password');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find((user) => user.email === email);
    if (userExists) return alert('User already exists!');

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created!');
    navigate('/login');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-20">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <button
        onClick={handleSignUp}
        className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition"
      >
        Create Account
      </button>
    </div>
  );
};

export default SignUp;
