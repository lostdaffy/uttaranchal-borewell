import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-10 md:py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
              Get In <span className="text-[#3dc1d3]">Touch</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
              Ready to start your drilling project? Contact us today!
            </p>
            <div className="w-16 md:w-20 h-1 bg-[#3dc1d3] mx-auto mt-4 md:mt-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="h-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#242424]">
                  Let's Start Your Drilling Project
                </h3>
                <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                  We are here to guide you through every step of your drilling
                  project. From site assessment to equipment manufacturing, our
                  expert team provides comprehensive support to make your water
                  resource development dreams come true with cutting-edge
                  technology.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {/* Location */}
                  <div className="flex items-start p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-3 md:mr-4">
                      <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#3dc1d3] to-[#2aa5b8] rounded-full flex items-center justify-center">
                        <i className="ri-map-pin-fill text-white text-lg md:text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1 md:mb-2 text-[#242424] text-sm md:text-base">
                        Head Office
                      </h6>
                      <p className="text-gray-600 mb-0 text-xs sm:text-sm md:text-base">
                        Industrial Area, Sector 12 <br />
                        Uttarakhand – 248001 <br />
                        Near Industrial Estate, <br />
                        Northern India Service Hub
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-3 md:mr-4">
                      <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#3dc1d3] to-[#2aa5b8] rounded-full flex items-center justify-center">
                        <i className="ri-phone-fill text-white text-lg md:text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1 md:mb-2 text-[#242424] text-sm md:text-base">
                        Call Us Now
                      </h6>
                      <p className="mb-0">
                        <Link
                          to="tel:+916396127137"
                          className="text-[#3dc1d3] font-semibold text-sm sm:text-base md:text-lg hover:text-[#2aa5b8] transition-colors"
                        >
                          +91 6396127137
                        </Link>
                        <br />
                        <small className="text-gray-500 text-xs md:text-sm">
                          <strong>Timings:</strong> 8:00 AM – 6:00 PM
                        </small>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-3 md:mr-4">
                      <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-[#3dc1d3] to-[#2aa5b8] rounded-full flex items-center justify-center">
                        <i className="ri-mail-fill text-white text-lg md:text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1 md:mb-2 text-[#242424] text-sm md:text-base">
                        Email Address
                      </h6>
                      <p className="mb-0">
                        <Link
                          to="mailto:info@uttaranchalborewell.com"
                          className="text-[#3dc1d3] font-semibold hover:text-[#2aa5b8] transition-colors text-xs sm:text-sm md:text-base break-all"
                        >
                          info@uttaranchalborewell.com
                        </Link>
                        <br />
                        <small className="text-gray-500 text-xs md:text-sm">
                          Get detailed drilling solutions via email
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="bg-white shadow-lg rounded-xl h-full">
                <div className="bg-white border-0 text-center py-4 md:py-6 px-4 md:px-6 rounded-t-xl">
                  <h4 className="font-bold mb-2 text-[#242424] text-lg md:text-xl">
                    Start Your Drilling Project
                  </h4>
                  <p className="text-gray-600 mb-0 text-sm md:text-base">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <div className="p-4 md:p-8">
                  <form action="https://api.web3forms.com/submit" method="POST">
                    {/* Web3Forms Access Key */}
                    <input
                      type="hidden"
                      name="access_key"
                      value="4806b9d9-6b90-416d-a72a-c36f5fb8658c"
                    />

                    {/* Full Name + Phone in One Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-bold text-[#242424] mb-1 md:mb-2 text-sm md:text-base"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#3dc1d3] focus:outline-none transition-colors text-sm md:text-base"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-bold text-[#242424] mb-1 md:mb-2 text-sm md:text-base"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#3dc1d3] focus:outline-none transition-colors text-sm md:text-base"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="mb-4 md:mb-6">
                      <label
                        htmlFor="email"
                        className="block font-bold text-[#242424] mb-1 md:mb-2 text-sm md:text-base"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#3dc1d3] focus:outline-none transition-colors text-sm md:text-base"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-4 md:mb-6">
                      <label
                        htmlFor="message"
                        className="block font-bold text-[#242424] mb-1 md:mb-2 text-sm md:text-base"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#3dc1d3] focus:outline-none transition-colors resize-none text-sm md:text-base"
                        placeholder="Tell us about your drilling requirements, site location, depth needed, geological conditions, or any specific questions about our services..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#3dc1d3] text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-bold text-base md:text-lg hover:from-[#2aa5b8] hover:to-[#3dc1d3] transition-all duration-300 flex items-center justify-center"
                    >
                      <i className="ri-send-plane-fill mr-2"></i>
                      Submit
                    </button>

                    <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4 text-center">
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
