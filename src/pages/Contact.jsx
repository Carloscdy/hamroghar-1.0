import React from "react";
import backgroundImage from "../assets/images/bg1.jpg";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section h-[50vh] relative flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Easy way to find a perfect property
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            We help clients buy, sell, and rent properties all across Nepal.
            Wherever you’re planning your next move, we’re here to guide you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Contact Us
            </h2>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left: Contact Form */}
            <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <form className="space-y-6 flex-1">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Type your message..."
                    className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Office Info + Map */}
            <div className="grid grid-rows-2 gap-6">
              {/* Info Box */}
              <div className="bg-indigo-900 text-white rounded-2xl p-8 space-y-6 shadow-lg flex flex-col justify-center">
                <h3 className="text-2xl font-bold">Our Office</h3>

                <div>
                  <p className="font-semibold">📧 Email</p>
                  <p className="text-gray-200">
                    contact@lalpurjanepal.com.np
                  </p>
                </div>

                <div>
                  <p className="font-semibold">📞 Phone</p>
                  <p className="text-gray-200">014352618, 9851342035</p>
                </div>

                <div>
                  <p className="font-semibold">📍 Address</p>
                  <p className="text-gray-200">Bharatpur, Chitwan, Nepal</p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="Office Location - Bharatpur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.072425274155!2d84.43333!3d27.68333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fbd5f93c8f9b%3A0x90b52a4f6b96d3c4!2sBharatpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1690000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

