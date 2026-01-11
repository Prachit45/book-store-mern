import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Logout() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  console.log("Logging out...", authUser);

  const handleLogout = () => {
    localStorage.removeItem("Users"); // clear persisted login
    setAuthUser(null); // clear context
    navigate("/signup"); // redirect to signup page
  };

  return (
    <button
      className="bg-red-500 text-white px-5 py-1.5 rounded hover:bg-red-700 transition"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
