import React, { useState, useEffect } from "react";

export default function Registration() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/registrations")
      .then(res => res.json())
      .then(data => setRegistrations(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Recent Registrations</h2>
      <ul className="bg-white shadow rounded-lg divide-y">
        {registrations.map((reg) => (
          <li key={reg.id} className="p-3 flex justify-between">
            <span>{reg.name}</span>
            <span className="text-gray-500">{reg.department}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
