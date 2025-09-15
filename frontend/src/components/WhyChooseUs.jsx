
import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const whyChooseUsData = [
  {
    title: "Experienced Technicians",
    description:
      "We have experienced and skilled technicians who can handle all kinds of washing machine repair issues.",
    icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
  },
  {
    title: "Service Guarantee",
    description:
      "Our repair services come with a guarantee to ensure customer satisfaction and peace of mind.",
    icon: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png",
  },
  {
    title: "Convenient Service",
    description:
      "Our repair technicians can come to your home at a convenient time to carry out repairs, saving you time and effort.",
    icon: "https://cdn-icons-png.flaticon.com/512/1946/1946433.png",
  },
  {
    title: "Customer Support",
    description:
      "We provide excellent customer support and are always available to answer any queries you may have.",
    icon: "https://cdn-icons-png.flaticon.com/512/3059/3059997.png",
  },
  {
    title: "Affordable Rates",
    description:
      "We offer competitive rates for our repair services without compromising on the quality of service.",
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
  },
  {
    title: "Genuine Parts",
    description:
      "We use only genuine and high-quality parts for washing machine repairs to ensure long-lasting performance.",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-10">Why Choose Us?</h2>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Centered Book Service Button */}
        <div className="mt-12 text-center">
          <Link
            to="/service"
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold shadow-md"
          >
            Book Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
