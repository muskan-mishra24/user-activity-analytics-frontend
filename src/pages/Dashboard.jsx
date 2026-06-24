import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import {
  getDailyAnalytics,
  getUserAnalytics,
  getStats,
} from "../services/analyticsService";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [dailyData, setDailyData] = useState([]);
  const [userData, setUserData] = useState([]);

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalLogs: 0,
    todayLogs: 0,
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const daily = await getDailyAnalytics();

      const users = await getUserAnalytics();

      const statsRes = await getStats();

      setDailyData(daily.data);
      setUserData(users.data);
      setStats(statsRes.data);
    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Analytics Dashboard</h1>

        {/* Stats Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Users</h3>
            <h1>{stats.totalUsers}</h1>
          </div>

          <div className="stat-card">
            <h3>Total Logs</h3>
            <h1>{stats.totalLogs}</h1>
          </div>

          <div className="stat-card">
            <h3>Today's Activity</h3>
            <h1>{stats.todayLogs}</h1>
          </div>
        </div>

        {/* Daily Activity Chart */}
        <div className="card">
          <h2>Daily Activity Trends</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="_id" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Activity */}
        <div className="card">
          <h2>User Activity</h2>

          {userData.length > 0 ? (
            userData.map((user, index) => (
              <div
                key={index}
                style={{
                  padding: "10px 0",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {user.email}
                </div>

                <div
                  style={{
                    color: "#666",
                    marginTop: "5px",
                  }}
                >
                  {user.actions}{" "}
                  {user.actions === 1
                    ? "action"
                    : "actions"}
                </div>

                <hr />
              </div>
            ))
          ) : (
            <p>No activity data found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;