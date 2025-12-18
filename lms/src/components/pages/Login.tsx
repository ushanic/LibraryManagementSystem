import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../images/image.jpg";

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate("/manage-books");
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      
      {/* Left Image Section (hidden on mobile) */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={bgImage}
          alt="Library"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4">
        <div className="w-full max-w-md p-6">
          
          <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Welcome to the Library Management System
          </h1>

          {/* Username */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-normal">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter the username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Password */}
          <div className="mb-10">
            <label className="block mb-2 text-sm font-normal">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button
              onClick={handleLogin}
              className="bg-black text-white py-2 px-6 w-full md:w-1/2 rounded hover:bg-orange-700 transition"
            >
              Login
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
