import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ParticipationChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Participation Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="event" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="participants" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
