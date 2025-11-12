import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // react-router
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init"; // <-- use your exported auth
import useAuth from "../hooks/useAuth";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithGoogle } = useAuth();

  const location = useLocation();
  const from = location.state?.from || '/';

  const navigate = useNavigate();

  // Password validation
  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasLength = password.length >= 6;
    return hasUpper && hasLower && hasLength;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 6 characters, include an uppercase and a lowercase letter."
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update displayName and photoURL
      await updateProfile(userCredential.user, { displayName: name, photoURL });

      toast.success("Signup successful!");
      navigate("/"); // redirect to Home
    } catch (error) {
      toast.error(error.message);
    }
  };


  const handleGoogleSignup = () => {
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
      <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Photo URL (optional)"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full border p-2 rounded"
        />

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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <div className="text-center text-gray-500 mt-3">OR</div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full mt-3 border border-gray-400 p-2 rounded hover:bg-gray-100"
        >
          Signup with Google
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
