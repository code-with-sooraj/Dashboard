import React, { useState, useEffect } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
      <ul className="bg-white shadow rounded-lg divide-y">
        {events.map((event) => (
          <li key={event.id} className="p-3 flex justify-between">
            <span>{event.name}</span>
            <span className="text-gray-500">{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
