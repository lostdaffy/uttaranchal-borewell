import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
              Get In <span className="text-[#3dc1d3]">Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to start your drilling project? Contact us today!
            </p>
            <div className="w-20 h-1 bg-[#3dc1d3] mx-auto mt-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="h-full">
                <h3 className="text-3xl font-bold mb-4 text-[#242424]">
                  Let's Start Your Drilling Project
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We are here to guide you through every step of your drilling
                  project. From site assessment to equipment manufacturing, our
                  expert team provides comprehensive support to make your water
                  resource development dreams come true with cutting-edge
                  technology.
                </p>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-15 h-15 bg-gradient-to-br from-[#3dc1d3] to-[#2aa5b8] rounded-full flex items-center justify-center">
                        <i className="ri-map-pin-fill text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2 text-[#242424]">
                        Head Office
                      </h6>
                      <p className="text-gray-600 mb-0">
                        Industrial Area, Sector 12 <br />
                        Uttarakhand – 248001 <br />
                        Near Industrial Estate, <br />
                        Northern India Service Hub
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-15 h-15 bg-gradient-to-br from-[#3dc1d3] to-[#2aa5b8] rounded-full flex items-center justify-center">
                        <i className="ri-phone-fill text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2 text-[#242424]">
                        Call Us Now
                      </h6>
                      <p className="mb-0">
                        <Link
                          to="tel:+916396127137"
                          className="text-[#3dc1d3] font-semibold text-lg hover:text-[#2aa5b8] transition-colors"
                        >
                          +91 6396127137
                        </Link>
                        <br />
                        <small className="text-gray-500">
                          <strong>Timings:</strong> 8:00 AM – 6:00 PM
                        </small>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-15 h-15 bg-gradient-to-br from-[#3dc1d3] to-[#2aa5b8] rounded-full flex items-center justify-center">
                        <i className="ri-mail-fill text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2 text-[#242424]">
                        Email Address
                      </h6>
                      <p className="mb-0">
                        <Link
                          to="mailto:info@uttaranchalborewell.com"
                          className="text-[#3dc1d3] font-semibold hover:text-[#2aa5b8] transition-colors"
                        >
                          info@uttaranchalborewell.com
                        </Link>
                        <br />
                        <small className="text-gray-500">
                          Get detailed drilling solutions via email
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-xl h-full">
                <div className="bg-white border-0 text-center py-6 px-6 rounded-t-xl">
                  <h4 className="font-bold mb-2 text-[#242424] text-xl">
                    Start Your Drilling Project
                  </h4>
                  <p className="text-gray-600 mb-0">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <div className="p-8">
                  <form action="https://api.web3forms.com/submit" method="POST">
                    {/* Web3Forms Access Key */}
                    <input
                      type="hidden"
                      name="access_key"
                      value="7a44d80a-3342-483d-8ca5-5431b1fd2b7c"
                    />

                    {/* Full Name + Phone in One Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-bold text-[#242424] mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3dc1d3] focus:outline-none transition-colors"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-bold text-[#242424] mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3dc1d3] focus:outline-none transition-colors"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block font-bold text-[#242424] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3dc1d3] focus:outline-none transition-colors"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block font-bold text-[#242424] mb-2"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3dc1d3] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your drilling requirements, site location, depth needed, geological conditions, or any specific questions about our services..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#3dc1d3] to-[#2aa5b8] text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-[#2aa5b8] hover:to-[#3dc1d3] transition-all duration-300 flex items-center justify-center"
                    >
                      <i className="ri-send-plane-fill mr-2"></i>
                      Get Free Quote
                    </button>

                    <p className="text-sm text-gray-500 mt-4 text-center">
                      * We provide free site surveys and detailed project
                      estimates
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
