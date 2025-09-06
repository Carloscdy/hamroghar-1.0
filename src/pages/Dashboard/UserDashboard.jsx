// src/pages/UserDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

function UserDashboard() {
  const favoriteProperties = [
    { id: 1, title: "Luxury Villa", location: "Kathmandu", price: 80, img: "/images/bg2.jpg" },
    { id: 2, title: "2BHK Apartment", location: "Bhaktapur", price: 20, img: "/images/bg3.png" },
  ];

  const mostViewed = [
    { id: 3, title: "Studio Apartment", location: "Lalitpur", price: 12, views: 1200, img: "/images/bg4.png" },
    { id: 4, title: "3BHK House", location: "Pokhara", price: 35, views: 950, img: "/images/bg5.png" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-indigo-600">🏠 Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="hover:text-indigo-600">📊 Overview</Link>
          <Link to="/dashboard/favorites" className="hover:text-indigo-600">⭐ Favorites</Link>
          <Link to="/dashboard/viewed" className="hover:text-indigo-600">👀 Most Viewed</Link>
          <Link to="/dashboard/settings" className="hover:text-indigo-600">⚙ Settings</Link>
        </nav>
        <div className="mt-auto pt-6 border-t">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome Back 👋</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-gray-500">Saved Favorites</h2>
            <p className="text-3xl font-bold text-indigo-600">{favoriteProperties.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-gray-500">Most Viewed</h2>
            <p className="text-3xl font-bold text-indigo-600">{mostViewed.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-gray-500">Total Visits</h2>
            <p className="text-3xl font-bold text-indigo-600">2,340</p>
          </div>
        </div>

        {/* Favorites */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">⭐ Favorite Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProperties.map((prop) => (
              <div key={prop.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <img src={prop.img} alt={prop.title} className="w-full h-40 object-cover rounded-t-xl" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{prop.title}</h3>
                  <p className="text-gray-500">📍 {prop.location}</p>
                  <p className="font-bold text-indigo-600">💰 Rs. {prop.price} Lakh</p>
                  <Link
                    to={`/property/${prop.id}`}
                    className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Most Viewed */}
        <section>
          <h2 className="text-2xl font-bold mb-4">👀 Most Viewed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mostViewed.map((prop) => (
              <div key={prop.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <img src={prop.img} alt={prop.title} className="w-full h-40 object-cover rounded-t-xl" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{prop.title}</h3>
                  <p className="text-gray-500">📍 {prop.location}</p>
                  <p className="font-bold text-indigo-600">💰 Rs. {prop.price} Lakh</p>
                  <p className="text-sm text-gray-600">👁 {prop.views} views</p>
                  <Link
                    to={`/property/${prop.id}`}
                    className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;
