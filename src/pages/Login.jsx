import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Fake login function (replace with Firebase Auth later)
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    // Mock authentication
    if (email === "test@skillswap.com" && password === "Test123") {
      setUser({ displayName: "Test User", email, photoURL: "" });
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } else {
      toast.error("Invalid email or password!");
    }
  };

  // Google Login (replace with Firebase Google login)
  const handleGoogleLogin = () => {
    console.log("Google Login");
    // Add your Google Auth logic here
    signInWithGoogle()
      .then(async (result) => {
        console.log(result);

        navigate(from);
      })
      .catch(error => {
        console.error(error);
      })
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="flex justify-between items-center text-sm">
          <Link
            to="/forgot-password"
            state={{ email }}
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
          <Link
            to="/signup"
            className="text-blue-600 hover:underline"
          >
            Signup
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <div className="text-center text-gray-500 mt-3">OR</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-3 border border-gray-400 p-2 rounded hover:bg-gray-100"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
}
