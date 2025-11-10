import React, { useState, useEffect } from "react";
import AttendanceChart from "../components/AttendanceChart";
import ParticipationChart from "../components/ParticipationChart";

export default function Analytics() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [participationData, setParticipationData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/analytics")
      .then(res => res.json())
      .then(data => {
        setAttendanceData(data.attendance || []);
        setParticipationData(data.participation || []);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <AttendanceChart data={attendanceData} />
      <ParticipationChart data={participationData} />
    </div>
  );
}
