import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import GetInTouch from "../components/GetInTouch";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <HeroSection
        title="Contact"
        highlight="Uttranchal Borewell"
        des="Ready to start your drilling project? Contact our experts for professional tubewell and borewell drilling services across Northern India."
      />
      {/* Contact Information Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            {/* Address */}
            <div className="text-center p-4 md:p-8 bg-[#3dc1d312] rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-map-pin-line text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                Our Address
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Kh.31 Near Packaging Factory
                <br />
                Bhagwanpur, Haridwar
                <br />
                Uttarakhand, 247661
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-4 md:p-8 bg-[#3dc1d312] rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-phone-line text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                Call Us
              </h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-600">
                  <a
                    href="tel:+916396127137"
                    className="hover:text-[#3dc1d3] transition-colors"
                  >
                    +91 6396127137
                  </a>
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  <a
                    href="tel:+919719313706"
                    className="hover:text-[#3dc1d3] transition-colors"
                  >
                    +91 9719313706
                  </a>
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  <a
                    href="tel:+917252046727"
                    className="hover:text-[#3dc1d3] transition-colors"
                  >
                    +91 7252046727
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="text-center p-4 md:p-8 bg-[#3dc1d312] rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#3dc1d3] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-mail-line text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                Email Us
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                <a
                  href="mailto:uttaranchalborewellpvtltd@gmail.com"
                  className="hover:text-[#3dc1d3] transition-colors break-all"
                >
                  uttaranchalborewellpvtltd@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl border border-gray-200 mt-6 md:mt-12">
            <iframe
              title="Company Location Map"
              src="https://www.google.com/maps?q=Kh.31%20Near%20Packaging%20Factory%2C%20Bhagwanpur%2C%20Haridwar%2C%20Uttarakhand%2C%20247661&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
};

export default Contact;
