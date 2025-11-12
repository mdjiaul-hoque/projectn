import React from "react";
import { Navigate, useLocation } from "react-router";
import { auth } from "../firebase/firebase.init";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const {user, loading} = useAuth(auth);
  const location = useLocation();

  if (loading) return <div>Loading...</div>;
  if (!user) {
    // send to login and preserve intended path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
