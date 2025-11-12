import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useSearchParams, useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const e = searchParams.get("email");
    if (e) setEmail(e);
  }, [searchParams]);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset sent. Opening Gmail...");
      // open Gmail in a new tab for user convenience
      window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Reset Password</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Reset Password</button>
    </form>
  );
}
