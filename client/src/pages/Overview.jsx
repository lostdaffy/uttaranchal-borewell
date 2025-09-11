import React, { useState } from "react";
import GetInTouch from "../components/GetInTouch";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-white pt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Deep Tubewell Drilling
                <span className="text-[#3dc1d3]"> Experts</span> Across Northern
                India
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 py-4 md:py-8">
                ISO certified company providing comprehensive tubewell drilling
                services and manufacturing high-quality drilling machines with
                cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  to="/our-services"
                  className="bg-[#3dc1d3] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#2aa5b8] transition duration-300 text-center"
                >
                  <i className="ri-settings-5-line"></i> Our Services
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[#3dc1d3] text-[#3dc1d3] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#3dc1d3] hover:text-white transition duration-300 text-center"
                >
                  <i className="ri-phone-fill"></i> Contact Us
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img src="/images/borewell.jpg" alt="" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-[#3dc1d312] flex items-center py-10 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Uttaranchal Borewell Pvt. Ltd.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#3dc1d3] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <img src="/images/about.jpg" alt="" className="w-full h-auto rounded-lg" />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Progressive Engineering <br className="hidden sm:block" /> & Infrastructure
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 md:mb-6 text-justify">
                Uttaranchal Borewell Pvt. Ltd. is a progressive engineering and
                infrastructure company specializing in tubewell drilling, rig
                manufacturing, and water resource development projects. We bring
                together deep industry experience, modern technology, and a
                commitment to quality execution.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 md:mb-6">
                We are recognized for our expertise in drilling in challenging
                geological conditions such as hard rock, dry zones, and boulder
                formations, where conventional solutions often fail. With our
                indigenously designed hi-tech rigs, we deliver reliable,
                cost-effective, and time-efficient services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-white flex items-center py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Drilling Services
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#3dc1d3] mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive drilling solutions across Northern India with
              cutting-edge technology and expert execution.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              "Tubewell Drilling",
              "Water Well Drilling",
              "Borewell Drilling",
              "Water Harvesting Tubewell Drilling",
              "Building Foundation Pilling Drilling",
              "Development Of Tubewell by OP Unit Repair & Maintenance of Drilling Rigs",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-lg transition duration-300 hover:border-[#3dc1d3]"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3dc1d3] rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <i className="ri-tools-line text-white text-lg md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                  {service}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Professional drilling services with modern equipment and
                  experienced technicians ensuring quality results.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="min-h-screen bg-[#3dc1d312] flex items-center py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Division
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#3dc1d3] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              High-quality drilling machines and equipment manufactured with
              precision engineering and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Products List */}
            <div className="order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    name: "Direct Rotary Rig",
                    desc: "Efficient drilling for water wells and construction",
                  },
                  {
                    name: "Reverse Rotary Rig",
                    desc: "High-capacity drilling for large diameter wells",
                  },
                  {
                    name: "Odex Rig",
                    desc: "Precision drilling through various soil conditions",
                  },
                  {
                    name: "DTH Rig",
                    desc: "Down-the-hole drilling for hard rock formations",
                  },
                  {
                    name: "Drilling Tools",
                    desc: "Complete range of professional drilling tools",
                  },
                  {
                    name: "Drilling Rods",
                    desc: "Durable rods for deep drilling operations",
                  },
                  {
                    name: "Bit Modifications",
                    desc: "Custom drill bits for specific applications",
                  },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <i className="ri-settings-4-line text-[#3dc1d3] text-xl md:text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm">{product.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/borewell-drilling.png"
                  alt="Manufacturing Equipment"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              {/* Quality Features */}
              <div className="mt-4 md:mt-8 grid grid-cols-2 gap-2 md:gap-4">
                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <i className="ri-shield-check-line text-[#3dc1d3] text-2xl md:text-3xl mb-1 md:mb-2"></i>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">
                    Quality Assured
                  </h5>
                </div>
                <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <i className="ri-customer-service-2-line text-[#3dc1d3] text-2xl md:text-3xl mb-1 md:mb-2"></i>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">24/7 Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="min-h-[400px] md:h-[500px] bg-white flex items-center py-10 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Uttaranchal Borewell?
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#3dc1d3] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-award-line text-white text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">
                ISO Certified
              </h3>
              <p className="text-sm md:text-base text-gray-600 px-2">
                Internationally recognized quality standards and certified
                processes ensuring reliable service delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-team-line text-white text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">
                Expert Team
              </h3>
              <p className="text-sm md:text-base text-gray-600 px-2">
                Highly skilled engineers and technicians with deep industry
                experience and technical expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-settings-4-line text-white text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">
                Advanced Technology
              </h3>
              <p className="text-sm md:text-base text-gray-600 px-2">
                State-of-the-art indigenous drilling rigs designed for
                challenging geological conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-truck-line text-white text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">
                Pan-India Service
              </h3>
              <p className="text-sm md:text-base text-gray-600 px-2">
                Comprehensive coverage across Northern India with timely project
                execution and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen bg-[#3dc1d312] flex items-center py-10 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise Areas
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#3dc1d3] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Proven track record in serving government, institutional, and
              private sector clients with innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-lg p-4 md:p-8 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Government Projects
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Large-scale water resource development projects for government
                agencies and public institutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">Municipal Water Supply</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">
                    Agricultural Development
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">Rural Water Schemes</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-8 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Industrial Solutions
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Specialized drilling services for industrial and commercial
                establishments across various sectors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">Manufacturing Plants</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">Commercial Buildings</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">Infrastructure Projects</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-8 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Private Sector
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Customized drilling solutions for residential, agricultural, and
                small-scale commercial requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">Residential Borewells</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">Farm Water Solutions</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                  <span className="text-sm md:text-base text-gray-600">Private Enterprises</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <GetInTouch />
    </>
  );
};

export default Overview;
