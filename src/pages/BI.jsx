import React from "react";
import { useNavigate } from "react-router-dom";

const BI = () => {
    const navigate =useNavigate();
  return (
    
    <div className="bg-black text-white mt-20 py-16 px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-extrabold">
          Business Intelligence Consulting Services that Empower Scalability
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          We are a dedicated business intelligence service company that offers a complete suite of BI analytics services,
          helping organizations get a comprehensive view of their business and make decisions quickly.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-8 rounded-xl shadow-lg">
          <ul className="text-xl font-semibold space-y-5">
            <li className="text-white">01. BI Consulting</li>
            <li className="text-gray-300">02. Enterprise Business Intelligence</li>
            <li className="text-gray-300">03. Implementation of BI Applications</li>
            <li className="text-gray-300">04. BI Support & Maintenance</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white">BI Consulting</h2>
          <p className="text-gray-300 mt-6 leading-relaxed">
            Our business intelligence consulting services help organizations identify gaps and opportunities
            by providing powerful insights through various{" "}
            <span className="text-blue-400 font-semibold">data visualization techniques</span>.
            We assign a multidisciplinary team of business intelligence consultants to ensure best-in-class solutions.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 text-black mt-20 py-16 px-8 rounded-xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-12">
          <div>
            <h2 className="text-5xl font-bold text-blue-600">8+</h2>
            <p className="text-gray-600 mt-3 text-lg">Years of Experience Delivering BI Solutions</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-blue-600">1500+</h2>
            <p className="text-gray-600 mt-3 text-lg">Technology Experts under One Roof</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-blue-600">3000+</h2>
            <p className="text-gray-600 mt-3 text-lg">Product Engineering Solutions Delivered</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-blue-600">98%</h2>
            <p className="text-gray-600 mt-3 text-lg">Client Satisfaction Rate</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
        <button onClick={() => navigate("/contact")} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md 
            hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Discuss Your Business Requirements →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BI;
