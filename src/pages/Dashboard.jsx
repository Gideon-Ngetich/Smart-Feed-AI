import { Modal } from "antd";
import Cattle from "../components/cattle";
import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const Dashboard = () => {
  const handleDateChange = (e) => {
    setDateRange(e.target.value);
  };
  const [dateRange, setDateRange] = useState('last7days');
 const milkData = [
  { date: 'Mon', milk: 250 },
  { date: 'Tue', milk: 310 },
  { date: 'Wed', milk: 280 },
  { date: 'Thu', milk: 340 },
  { date: 'Fri', milk: 300 },
  { date: 'Sat', milk: 360 },
  { date: 'Sun', milk: 400 },
]
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
    
return (
  <div>
    <Layout>
      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-6 bg-blue-100 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold text-black-800">Welcome back, Chelsie</h2>
          <p className="text-black-800">Here's your farm overview for today</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-black-700">Total Cattle</h3>
            <p className="text-2xl font-bold text-black-600">247</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-black-700">Healthy</h3>
            <p className="text-2xl font-bold text-black-600">241</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-black-700">Daily Milk</h3>
            <p className="text-2xl font-bold text-black-600">1,840 gallons</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-black-700">Efficiency</h3>
            <p className="text-2xl font-bold text-bl-600">94.2%</p>
          </div>
        </div>
      </div>

      {/* Milk Production Analytics and Quick Actions */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="bg-white rounded-xl shadow p-6 flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-black800">Milk Production Analytics</h2>
            <select
              id="dateRange"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="last90days">Last 90 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={milkData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="milk"
                stroke="#4F46E5"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl shadow p-6 w-full md:w-1/3">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
              onClick={showModal}
            >
              Add New Cattle
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
              Health Check
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
              Weight Entry
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
              Feed Schedule
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600">AI Recommendation</h3>
            <p className="text-black-700">
              Cow #237 shows elevated risk of mastitis. Immediate assessment needed.
            </p>
          </div>
        </div>
      </div>
      {/* Add margin between analytics and environmentals */}
      <div className="my-8" />
      {/* Environmental Conditions and Recent Activities side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Environmental Conditions */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4 mt-8">
          <h3 className="text-xl font-semibold text-black-800">Environmental Conditions</h3>
          <div className="flex items-center space-x-4">
            <img src="react.svg" alt="Icon" width="40" />
          </div>
          <div className="text-sm font-medium text-black-600">Condition:</div>
          <div className="text-base text-gray-800" id="weatherCondition">Loading...</div>
          <div className="flex justify-between mt-4">
            <div>
              <div className="text-sm font-medium text-black-600">Temperature:</div>
              <div className="text-base text-gray-800" id="temperature">--</div>
            </div>
            <div>
              <div className="text-sm font-medium text-black-600">Humidity:</div>
              <div className="text-base text-gray-800" id="humidity">--</div>
            </div>
          </div>
          {/* Weather Forecast */}
          <h3 className="text-lg font-semibold text-black-800 mt-4">Weather Forecast</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-black-700">Today</span>
              <span id="forecastToday" className="text-gray-600">--</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium text-black-700">Tomorrow</span>
              <span id="forecastTomorrow" className="text-gray-600">--</span>
            </div>
          </div>
        </div>
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow p-6 space-y-2 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
          {[
            '✔ Milk recorded for Cow -#123',
            '✔ Health check completed for Cow -#205',
            '✔ Weight entry added for Cow -#187',
            '✔ New cattle (Cow #300) registered',
          ].map((activity, idx) => (
            <div key={idx} className="text-black-700">
              {activity}
            </div>
          ))}
        </div>
      </div>
    </Layout>
    <button onClick={showModal}></button>
    <Cattle open={open} onCancel={handleCancel} />
  </div>
);
};


export default Dashboard;
