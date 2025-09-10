import React from "react";
import HeroSection from "../components/HeroSection";

const HowItWorks = () => {
  return (
    <>
      <HeroSection
        title="How It"
        highlight="Works"
        des="Our systematic approach ensures efficient, reliable, and high-quality drilling solutions from consultation to completion."
      />

      {/* Step 1: Site Assessment & Planning */}
      <section className="min-h-screen bg-[#3dc1d312] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3dc1d3] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Site Assessment & Planning
                </h2>
              </div>

              <p className="text-lg text-gray-600 mb-8 text-justify">
                Our expert team begins with a comprehensive site survey to
                understand geological conditions, water table depth, and soil
                composition. We use advanced geophysical techniques and conduct
                detailed feasibility studies to determine the optimal drilling
                location and method.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-search-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Geological Survey
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Detailed analysis of soil composition and rock formations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-map-pin-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Location Mapping
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Precise positioning using GPS and geophysical equipment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-file-text-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Technical Planning
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Customized drilling plan with equipment selection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/engineer.jpg"
                  alt="Site Assessment and Planning"
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Drilling Process */}
      <section className="min-h-screen bg-white flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src="/images/working.jpg"
                  alt="Drilling Process"
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3dc1d3] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Professional Drilling
                </h2>
              </div>

              <p className="text-lg text-gray-600 mb-8 text-justify">
                Using our state-of-the-art indigenous drilling rigs, we execute
                precise drilling operations. Our experienced operators handle
                various geological conditions including hard rock, boulder
                formations, and challenging terrains with specialized techniques
                and equipment.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-settings-4-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Equipment Setup
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Mobilization and setup of appropriate drilling rig
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-tools-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Precision Drilling
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Continuous monitoring with real-time depth measurement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-shield-check-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Safety Protocols
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Strict adherence to safety standards throughout operation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Testing & Completion */}
      <section className="min-h-screen bg-[#3dc1d312] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3dc1d3] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Testing & Completion
                </h2>
              </div>

              <p className="text-lg text-gray-600 mb-8 text-justify">
                After drilling completion, we conduct comprehensive water yield
                testing, quality analysis, and well development. Our team
                ensures proper casing installation, pump fitting
                recommendations, and provides complete documentation with
                maintenance guidelines.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-test-tube-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Water Testing
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive yield and quality analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-building-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Well Development
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Proper casing, screening, and well completion
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i className="ri-file-list-line text-[#3dc1d3] text-xl mt-1"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Documentation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Complete project report with maintenance guidelines
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-[#3dc1d3] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2aa5b8] transition duration-300">
                  Start Your Project
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/workers-checking.jpg"
                  alt="Testing and Completion"
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              {/* Additional Info Cards */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <i className="ri-time-line text-[#3dc1d3] text-3xl mb-2"></i>
                  <h5 className="font-semibold text-gray-900">
                    Timely Completion
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    Projects delivered on schedule
                  </p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <i className="ri-customer-service-line text-[#3dc1d3] text-3xl mb-2"></i>
                  <h5 className="font-semibold text-gray-900">
                    After-sales Support
                  </h5>
                  <p className="text-xs text-gray-600 mt-1">
                    Ongoing maintenance assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Complete Process Timeline
            </h2>
            <div className="w-24 h-1 bg-[#3dc1d3] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                {/* Connection line */}
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                Site survey, geological analysis, and technical planning phase
              </p>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                {/* Connection line */}
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Drilling
              </h3>
              <p className="text-gray-600 text-sm">
                Professional drilling execution using advanced equipment and
                techniques
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Completion
              </h3>
              <p className="text-gray-600 text-sm">
                Testing, quality assurance, and project handover with
                documentation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
