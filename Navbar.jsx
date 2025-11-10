import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between p-4 shadow-md">
      <h1 className="text-xl font-bold">University Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Registration</Link>
        <Link to="/events" className="hover:text-gray-200">Events</Link>
        <Link to="/analytics" className="hover:text-gray-200">Analytics</Link>
      </div>
    </nav>
  );
}
