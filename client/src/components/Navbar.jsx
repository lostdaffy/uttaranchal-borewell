import React, { useState } from "react";
import { Link } from "react-router-dom";

const navbarData = {
  brand: { logo: "/images/logo.png", link: "/" },
  desktopMenu: [
    { name: "Overview", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Our Services", path: "/our-services" },
    { name: "Contact Us", path: "/contact" },
  ],
  callNow: { label: "Call Now", phone: "+919667601325" },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 py-2 md:py-3 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link to={navbarData.brand.link}>
            <img src="/images/logo.jpg" className="w-16 sm:w-18 md:w-20" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8 xl:space-x-14 relative">
              {navbarData.desktopMenu.map((item, i) => (
                <li key={i} className="relative group">
                  {!item.children ? (
                    <Link
                      className="text-gray-800 hover:text-[#3dc1d3] transition-colors duration-300 font-medium text-sm xl:text-base"
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <span className="text-gray-800 hover:text-[#3dc1d3] transition-colors flex items-center cursor-pointer font-medium text-sm xl:text-base">
                        {item.name}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                      {/* 1st-level dropdown (countries) */}
                      <ul
                        className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-xl border border-gray-200
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-200 z-50"
                      >
                        {item.children.map((country, ci) => (
                          <li key={ci} className="relative group/country">
                            <div className="flex items-center justify-between px-6 py-3 text-gray-800 cursor-pointer hover:bg-gray-50">
                              <Link
                                className="flex-1 border-b border-gray-200 pb-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {country.name}
                              </Link>
                              {country.children && (
                                <span className="ml-2 text-gray-600">›</span>
                              )}
                            </div>

                            {/* 2nd-level dropdown (universities) */}
                            {country.children && (
                              <ul
                                className="absolute left-full top-0 w-80 bg-white rounded-md shadow-lg border border-gray-200
                                opacity-0 invisible group-hover/country:opacity-100 group-hover/country:visible 
                                transition-all duration-200 z-50 max-h-80 overflow-y-auto"
                              >
                                <li className="px-4 py-2 bg-gray-50 border-b">
                                  <span className="text-sm font-semibold text-gray-700">
                                    Universities in {country.name}
                                  </span>
                                </li>
                                {country.children.map((uni, ui) => (
                                  <li key={ui}>
                                    <Link
                                      to={uni.path}
                                      className="block px-6 py-3 text-gray-700 text-sm hover:bg-gray-50 hover:text-[#3dc1d3] transition-colors"
                                    >
                                      {uni.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Call Now Button */}
          <div className="hidden lg:block">
            <Link
              href={`tel:${navbarData.callNow.phone}`}
              className="bg-[#3dc1d3] text-white font-semibold rounded-full py-2 px-6 xl:py-3 xl:px-8 hover:bg-[#2aa5b8] transition-colors duration-300 text-sm xl:text-base"
            >
              <i className="ri-phone-fill mr-1"></i>
              {navbarData.callNow.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-800 p-2" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden mt-3 md:mt-4 transition-all duration-300 ${
            isMenuOpen ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-xl">
            <ul className="flex flex-col space-y-2">
              {navbarData.desktopMenu.map((item, i) => (
                <li key={i}>
                  {!item.children ? (
                    <Link
                      to={item.path}
                      className="text-gray-800 hover:text-[#3dc1d3] block py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <details className="text-gray-800">
                      <summary className="cursor-pointer py-3 px-3 hover:text-[#3dc1d3] hover:bg-gray-50 rounded-lg transition-colors list-none">
                        <span className="flex items-center justify-between">
                          <span className="font-medium">{item.name}</span>
                          <svg
                            className="w-4 h-4 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </summary>
                      <ul className="mt-2 space-y-1 bg-gray-50 rounded-lg p-2 border border-gray-100">
                        {item.children.map((country, ci) => (
                          <li key={ci}>
                            <details>
                              <summary className="cursor-pointer py-2 px-3 text-gray-700 hover:text-[#3dc1d3] hover:bg-white rounded transition-colors list-none">
                                <span className="flex items-center justify-between">
                                  <span>{country.name}</span>
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </span>
                              </summary>
                              <ul className="mt-1 space-y-1 max-h-40 overflow-y-auto bg-white rounded p-2 border border-gray-100">
                                {country.children.map((uni, ui) => (
                                  <li key={ui}>
                                    <Link
                                      to={uni.path}
                                      className="py-2 px-3 text-gray-600 hover:text-[#3dc1d3] hover:bg-gray-50 transition-colors text-sm rounded flex items-center"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      <svg
                                        className="w-3 h-3 mr-2 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                      {uni.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}

              {/* Mobile Call Now Button */}
              <li className="pt-4 border-t border-gray-200">
                <Link
                  href={`tel:${navbarData.callNow.phone}`}
                  className="bg-[#3dc1d3] text-white font-semibold rounded-lg py-3 px-4 hover:bg-[#2aa5b8] transition-colors flex items-center justify-center w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-phone-fill mr-2"></i>
                  {navbarData.callNow.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
