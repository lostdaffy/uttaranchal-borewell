import React from "react";
import HeroSection from "../components/HeroSection";

const OurServices = () => {
  const drillingServices = [
    {
      title: "Tubewell Drilling",
      description:
        "Professional tubewell drilling services for agricultural, residential, and commercial water supply requirements with advanced drilling techniques.",
      icon: "ri-hammer-line",
      image:
        "https://img.freepik.com/free-photo/construction-worker-drilling-ground_23-2148763521.jpg",
    },
    {
      title: "Water Well Drilling",
      description:
        "Comprehensive water well drilling solutions for sustainable water access in rural and urban areas using modern equipment.",
      icon: "ri-drop-line",
      image:
        "https://img.freepik.com/free-photo/water-well-drilling-equipment-construction-site_23-2148763534.jpg",
    },
    {
      title: "Borewell Drilling",
      description:
        "Specialized borewell drilling services for deep water extraction with precision drilling technology and quality assurance.",
      icon: "ri-settings-4-line",
      image:
        "https://img.freepik.com/free-photo/industrial-drilling-machine-construction-site_23-2148763567.jpg",
    },
    {
      title: "Water Harvesting Tubewell Drilling",
      description:
        "Eco-friendly water harvesting tubewell solutions for rainwater collection and groundwater recharge systems.",
      icon: "ri-recycle-line",
      image:
        "https://img.freepik.com/free-photo/rainwater-harvesting-system-construction_23-2148763589.jpg",
    },
    {
      title: "Building Foundation Pilling Drilling",
      description:
        "Foundation piling drilling services for construction projects ensuring structural stability and load-bearing capacity.",
      icon: "ri-building-line",
      image:
        "https://img.freepik.com/free-photo/foundation-piling-construction-work_23-2148763598.jpg",
    },
    {
      title: "Development Of Tubewells By Air Compressor",
      description:
        "Advanced tubewell development using high-pressure air compressor technology for enhanced water yield and quality.",
      icon: "ri-gas-station-line",
      image:
        "https://img.freepik.com/free-photo/air-compressor-drilling-equipment_23-2148763612.jpg",
    },
    {
      title: "Development Of Tubewell by OP",
      description:
        "Tubewell development using optimized pressure (OP) techniques for maximum water extraction efficiency.",
      icon: "ri-speed-up-line",
      image:
        "https://img.freepik.com/free-photo/pressure-drilling-equipment-operation_23-2148763623.jpg",
    },
    {
      title: "Unit Repair & Maintenance of Drilling Rigs",
      description:
        "Professional repair and maintenance services for drilling rigs ensuring optimal performance and extended equipment life.",
      icon: "ri-tools-line",
      image:
        "https://img.freepik.com/free-photo/drilling-rig-maintenance-work_23-2148763634.jpg",
    },
    {
      title: "Water Resources Infrastructure Construction",
      description:
        "Complete water resource infrastructure development including pipelines, storage systems, and distribution networks.",
      icon: "ri-road-map-line",
      image:
        "https://img.freepik.com/free-photo/water-infrastructure-construction-project_23-2148763645.jpg",
    },
  ];

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
      image:
        "https://img.freepik.com/free-photo/direct-rotary-drilling-rig-equipment_23-2148763656.jpg",
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
      image:
        "https://img.freepik.com/free-photo/reverse-rotary-drilling-equipment_23-2148763667.jpg",
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
      image:
        "https://img.freepik.com/free-photo/odex-drilling-rig-operation_23-2148763678.jpg",
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
      image:
        "https://img.freepik.com/free-photo/dth-drilling-rig-hard-rock_23-2148763689.jpg",
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
      image:
        "https://img.freepik.com/free-photo/professional-drilling-tools-collection_23-2148763701.jpg",
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
      image:
        "https://img.freepik.com/free-photo/drilling-rods-equipment-storage_23-2148763712.jpg",
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
      image:
        "https://img.freepik.com/free-photo/custom-drill-bits-modification_23-2148763723.jpg",
    },
  ];

  return (
    <>
      <HeroSection
        title="Our"
        highlight="Services"
        des="Comprehensive drilling services and high-quality manufacturing solutions for all your water resource development needs"
      />

      {/* Services We Provide Section */}
      <section className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services We Provide
            </h2>
            <div className="w-24 h-1 bg-[#3dc1d3] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional drilling services across Northern India with
              cutting-edge technology and expert execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drillingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 hover:border-[#3dc1d3] group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#3dc1d3] rounded-lg flex items-center justify-center mb-4">
                    <i className={`${service.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="min-h-screen bg-[#3dc1d312] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Division
            </h2>
            <div className="w-24 h-1 bg-[#3dc1d3] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality drilling equipment and machinery manufactured with
              precision engineering and cutting-edge technology
            </p>
          </div>

          <div className="space-y-12">
            {manufacturingProducts.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-[#3dc1d3] rounded-lg flex items-center justify-center mr-4">
                        <i
                          className={`${product.icon} text-white text-2xl`}
                        ></i>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {product.title}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 mb-6">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <i className="ri-checkbox-circle-line text-[#3dc1d3] mr-2"></i>
                            <span className="text-gray-600 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Features */}
      <section className="h-[400px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white">
            <h3 className="text-3xl font-bold text-gray-900 text-center pb-20">
              Why Choose Our Manufacturing ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Assured
                </h4>
                <p className="text-gray-600 text-sm">
                  ISO certified manufacturing processes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-tools-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Custom Solutions
                </h4>
                <p className="text-gray-600 text-sm">
                  Tailored equipment for specific needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-customer-service-2-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-sm">
                  Round-the-clock technical assistance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-truck-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Pan-India Delivery
                </h4>
                <p className="text-gray-600 text-sm">
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
