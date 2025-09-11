import React from "react";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";

const WhoWeAre = () => {
  return (
    <>
      <HeroSection
        title="Who We"
        highlight="Are"
        des="Progressive Engineering Excellence in Water Resource Development"
      />

      {/* Company Introduction Section */}
      <section className="min-h-screen bg-white flex items-center py-10 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <img
                src="/images/logo.jpg"
                alt="Drilling Equipment"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Uttaranchal Borewell Pvt. Ltd.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-justify">
                Uttaranchal Borewell Pvt. Ltd. is a progressive engineering and
                infrastructure company specializing in tubewell drilling, rig
                manufacturing, and water resource development projects. The
                company brings together deep industry experience, modern
                technology, and a commitment to quality execution.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-justify">
                We are recognized for our expertise in drilling in challenging
                geological conditions such as hard rock, dry zones, and boulder
                formations, where conventional solutions often fail. With our
                indigenously designed hi-tech rigs, we deliver reliable,
                cost-effective, and time-efficient services for government,
                institutional, and private sector clients.
              </p>

              <div className="grid grid-cols-2 gap-2 md:gap-4 mt-6 md:mt-8">
                <div className="text-center p-3 md:p-4 bg-[#3dc1d312] rounded-lg">
                  <i className="ri-shield-check-line text-[#3dc1d3] text-2xl md:text-3xl mb-1 md:mb-2"></i>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">ISO Certified</h5>
                </div>
                <div className="text-center p-3 md:p-4 bg-[#3dc1d312] rounded-lg">
                  <i className="ri-award-line text-[#3dc1d3] text-2xl md:text-3xl mb-1 md:mb-2"></i>
                  <h5 className="font-semibold text-gray-900 text-sm md:text-base">
                    Quality Assured
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Innovation Section */}
      <section className="min-h-screen bg-[#3dc1d312] flex items-center py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Expertise & Innovation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-justify">
                Our team excels in tackling the most challenging drilling
                scenarios that conventional methods cannot handle. From hard
                rock formations to dry zones and complex boulder terrain, we
                have developed specialized techniques and equipment to ensure
                successful project completion.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3dc1d3] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-hammer-line text-white text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                      Hard Rock Drilling
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      Advanced drilling techniques for challenging hard rock
                      formations using specialized equipment and indigenous
                      technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3dc1d3] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-drop-line text-white text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                      Dry Zone Solutions
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      Specialized water resource development in arid and
                      semi-arid regions with proven success rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3dc1d3] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-landscape-line text-white text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                      Boulder Formations
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      Expert handling of complex boulder terrain using
                      innovative drilling methodologies and equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <img
                src="/images/driller.jpg"
                alt="Engineering Team"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Future Goals Section */}
      <section className="min-h-screen bg-white flex items-center py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Future Goals
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#3dc1d3] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Leading India's self-reliance in drilling technology and energy
              sector infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <img
                src="/images/logo.jpg"
                alt="Future Vision"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain"
              />
            </div>

            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Expanding Horizons
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-justify">
                  As part of our long-term vision, Uttaranchal Borewell Pvt.
                  Ltd. is expanding into rig design and manufacturing, with a
                  focus on advancing India's self-reliance in heavy engineering
                  under the Make in India initiative.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-justify">
                  Our roadmap includes scaling towards oil well drilling rigs
                  and energy-sector infrastructure solutions, positioning the
                  company as a future leader in indigenous drilling technology.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#3dc1d3] to-[#2aa5b8] p-4 md:p-6 rounded-lg text-white">
                <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Our Mission</h4>
                <p className="text-white/90 text-sm md:text-base">
                  Driven by innovation, integrity, and performance, Uttaranchal
                  Borewell Pvt. Ltd. aims to set new benchmarks in water
                  resource management and drilling services across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <GetInTouch />
    </>
  );
};

export default WhoWeAre;
