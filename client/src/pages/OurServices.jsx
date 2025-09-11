import React from "react";
import HeroSection from "../components/HeroSection";

const OurServices = () => {
  const manufacturingProducts = [
    {
      title: "Direct Rotary Rig",
      description:
        "High-performance direct rotary drilling rigs designed for efficient drilling in various geological conditions with superior reliability.",
      features: [
        "High torque capacity",
        "Precision control",
        "Durable construction",
        "Easy maintenance",
      ],
      icon: "ri-settings-4-line",
    },
    {
      title: "Reverse Rotary Rig",
      description:
        "Advanced reverse rotary drilling systems for large diameter wells with high-capacity drilling and superior performance.",
      features: [
        "Large diameter capability",
        "High circulation rates",
        "Robust design",
        "Automated controls",
      ],
      icon: "ri-refresh-line",
    },
    {
      title: "Odex Rig",
      description:
        "Specialized Odex drilling rigs for precision drilling through challenging soil conditions and complex terrain.",
      features: [
        "Precision drilling",
        "Versatile operation",
        "Compact design",
        "High accuracy",
      ],
      icon: "ri-crosshair-line",
    },
    {
      title: "DTH Rig",
      description:
        "Down-the-hole drilling rigs engineered for hard rock formations with powerful percussion and rotary action.",
      features: [
        "Hard rock capability",
        "High penetration rate",
        "Efficient operation",
        "Minimal maintenance",
      ],
      icon: "ri-hammer-line",
    },
    {
      title: "Drilling Tools",
      description:
        "Complete range of professional drilling tools and accessories manufactured with premium materials and precision engineering.",
      features: [
        "Premium materials",
        "Precision engineered",
        "Wide range available",
        "Custom solutions",
      ],
      icon: "ri-tools-fill",
    },
    {
      title: "Drilling Rods",
      description:
        "High-strength drilling rods designed for deep drilling operations with excellent durability and performance characteristics.",
      features: [
        "High strength steel",
        "Corrosion resistant",
        "Various sizes",
        "Long lasting",
      ],
      icon: "ri-stack-line",
    },
    {
      title: "Bit Modifications",
      description:
        "Custom drill bit modifications and specialized bits designed for specific geological conditions and drilling requirements.",
      features: [
        "Custom designs",
        "Application specific",
        "Enhanced performance",
        "Quality materials",
      ],
      icon: "ri-settings-3-line",
    },
  ];

  return (
    <>
      <HeroSection
        title="Our"
        highlight="Services"
        des="Comprehensive drilling services and high-quality manufacturing solutions for all your water resource development needs"
      />

      {/* Services Section */}
      <section className="min-h-screen bg-white flex items-center py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Drilling Services
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#3dc1d3] mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
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
      <section className="min-h-screen bg-[#3dc1d312] py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Division
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#3dc1d3] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              High-quality drilling equipment and machinery manufactured with
              precision engineering and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {manufacturingProducts.map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#3dc1d3] rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i
                        className={`${product.icon} text-white text-lg md:text-xl`}
                      ></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mt-auto">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                      Key Features:
                    </h4>
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <i className="ri-checkbox-circle-fill text-[#3dc1d3] mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-sm md:text-base"></i>
                          <span className="text-gray-600 text-xs md:text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Features */}
      <section className="min-h-[300px] md:h-[400px] flex items-center py-10 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center pb-10 md:pb-20">
              Why Choose Our Manufacturing ?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="ri-shield-check-line text-white text-xl md:text-2xl"></i>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                  Quality Assured
                </h4>
                <p className="text-gray-600 text-xs md:text-sm px-2">
                  ISO certified manufacturing processes
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="ri-tools-line text-white text-xl md:text-2xl"></i>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                  Custom Solutions
                </h4>
                <p className="text-gray-600 text-xs md:text-sm px-2">
                  Tailored equipment for specific needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="ri-customer-service-2-line text-white text-xl md:text-2xl"></i>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-xs md:text-sm px-2">
                  Round-the-clock technical assistance
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className="ri-truck-line text-white text-xl md:text-2xl"></i>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                  Pan-India Delivery
                </h4>
                <p className="text-gray-600 text-xs md:text-sm px-2">
                  Nationwide shipping and installation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
