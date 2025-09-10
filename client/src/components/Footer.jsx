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
    <footer className="bg-gray-900 text-white flex items-center pt-15 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <img src="/images/logo.jpg" className="w-30 rounded-3xl" alt="" />
            <p className="text-gray-300 mb-6 leading-relaxed pt-10">
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
                    className="w-10 h-10 bg-gray-700 hover:bg-[#3dc1d3] rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-gray-300 group-hover:text-white text-lg`}></i>
                  </a>
                ))}
              </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="hover:text-[#3dc1d3] transition-colors"
                  >
                    <i className="ri-arrow-right-long-line text-[#3dc1d3]"></i> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}><i className="ri-settings-5-line text-[#3dc1d3]"></i> {service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Manufacturing</h4>
            <ul className="space-y-2 text-gray-300">
              {products.map((product, index) => (
                <li key={index}><i className="ri-product-hunt-line text-[#3dc1d3]"></i> {product}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2025 <span className="text-[#3dc1d3]">Uttaranchal Borewell Pvt. Ltd.</span> All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-300">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.path} 
                  className="hover:text-[#3dc1d3] transition-colors"
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
