import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Navigation links object
  const navigationLinks = [
    { name: "Overview", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Our Services", path: "/our-services" },
    { name: "Contact Us", path: "/contact" }
  ];

  // Services array
  const services = [
    "Tubewell Drilling",
    "Water Well Drilling",
    "Borewell Drilling",
    "Building Drilling",
    "Water Harvesting"
  ];

  // Manufacturing products array
  const products = [
    "Direct Rotary Rig",
    "Reverse Rotary Rig",
    "DTH Rig",
    "Drilling Tools",
    "Custom Solutions"
  ];

  // Footer links
  const footerLinks = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
  ];

  // Social media links object
  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "ri-facebook-fill"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "ri-twitter-fill"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "ri-instagram-line"
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "ri-youtube-fill"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img src="/images/logo.jpg" className="w-24 md:w-28 lg:w-30 rounded-2xl md:rounded-3xl" alt="Uttaranchal Borewell Logo" />
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed pt-4 md:pt-6 lg:pt-10 text-sm md:text-base">
              A progressive engineering company specializing in tubewell
              drilling, rig manufacturing, and water resource development.
              Driven by innovation, integrity, and performance to set new
              benchmarks in drilling services across India.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 hover:bg-[#3dc1d3] rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-gray-300 group-hover:text-white text-base md:text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="hover:text-[#3dc1d3] transition-colors text-sm md:text-base flex items-center"
                  >
                    <i className="ri-arrow-right-s-line text-[#3dc1d3] mr-1"></i> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index} className="text-sm md:text-base flex items-center">
                  <i className="ri-settings-5-line text-[#3dc1d3] mr-2 text-sm"></i> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Manufacturing</h4>
            <ul className="space-y-2 text-gray-300">
              {products.map((product, index) => (
                <li key={index} className="text-sm md:text-base flex items-center">
                  <i className="ri-product-hunt-line text-[#3dc1d3] mr-2 text-sm"></i> {product}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-gray-700 pt-6 md:pt-8 mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center text-white">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Address */}
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-map-pin-line text-white text-lg md:text-xl"></i>
              </div>
              <h5 className="font-semibold text-sm md:text-base mb-2 text-white">Head Office</h5>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Kh.31 Near Packaging Factory<br />
                Bhagwanpur, Haridwar<br />
                Uttarakhand, 247661
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-phone-line text-white text-lg md:text-xl"></i>
              </div>
              <h5 className="font-semibold text-sm md:text-base mb-2 text-white">Call Us</h5>
              <div className="space-y-1 text-xs md:text-sm">
                <p className="text-gray-300">
                  <a href="tel:+916396127137" className="hover:text-[#3dc1d3] transition-colors">
                    +91 6396127137
                  </a>
                </p>
                <p className="text-gray-300">
                  <a href="tel:+919719313706" className="hover:text-[#3dc1d3] transition-colors">
                    +91 9719313706
                  </a>
                </p>
                <p className="text-gray-300">
                  <a href="tel:+917252046727" className="hover:text-[#3dc1d3] transition-colors">
                    +91 7252046727
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="text-center p-4 bg-gray-800 rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-mail-line text-white text-lg md:text-xl"></i>
              </div>
              <h5 className="font-semibold text-sm md:text-base mb-2 text-white">Email Us</h5>
              <p className="text-gray-300 text-xs md:text-sm">
                <a 
                  href="mailto:uttaranchalborewellpvtltd@gmail.com" 
                  className="hover:text-[#3dc1d3] transition-colors break-all"
                >
                  uttaranchalborewellpvtltd@gmail.com
                </a>
              </p>
              <p className="text-gray-400 text-xs mt-1">24/7 Customer Support</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-300 text-xs md:text-sm text-center md:text-left">
              © 2025 <span className="text-[#3dc1d3] font-semibold">Uttaranchal Borewell Pvt. Ltd.</span> All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-gray-300">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.path} 
                  className="hover:text-[#3dc1d3] transition-colors text-xs md:text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
