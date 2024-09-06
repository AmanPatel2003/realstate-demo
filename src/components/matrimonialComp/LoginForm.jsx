"use client"
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({
      email,
      password,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="px-4  bg-black/70 rounded-lg shadow-md w-96 h-full flex items-center justify-center py-8 my-6 ">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-2 flex flex-col items-start">
          <label htmlFor="email" className="mb-3 text-xs font-medium text-white w-full text-start">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-2 flex flex-col items-start">
          <label htmlFor="password" className="mb-3 text-xs font-medium text-white w-full text-start">
            Password
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 w-full pr-10 rounded"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-pink-600 rounded hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500  mt-4"
        >
          Login
        </button>
        <p className="mt-4 text-xs text-gray-400 text-center">
          By logging in, you agree to our 
          <a href="#" className="text-pink-500"> Terms of Use </a> and
          <a href="#" className="text-pink-500"> Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
