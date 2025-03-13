import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const BPM = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen mt-20 py-12 px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Business Process Management (BPM) Consultancy
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Optimize, automate, and enhance your business operations with our expert BPM solutions. We streamline workflows, reduce inefficiencies, and drive productivity.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our BPM Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Business Process Analysis & Optimization</li>
            <li>✔ Workflow Automation</li>
            <li>✔ Digital Transformation Consulting</li>
            <li>✔ Robotic Process Automation (RPA)</li>
            <li>✔ Performance Monitoring & Reporting</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-blue-600 text-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-4">
            Our BPM experts help businesses redefine their processes with innovative strategies, automation, and cutting-edge technologies.
          </p>
          <button onClick={() => navigate("/contact")} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get a Free Consultation →
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white max-w-6xl mx-auto mt-16 py-12 px-6 rounded-lg shadow-lg text-center grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-blue-600">10+</h2>
          <p className="text-gray-600">Years in BPM Consultancy</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-600">500+</h2>
          <p className="text-gray-600">Business Processes Optimized</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-600">99%</h2>
          <p className="text-gray-600">Client Satisfaction Rate</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-600">100+</h2>
          <p className="text-gray-600">Workflow Automations Implemented</p>
        </div>
      </div>
    </div>
  );
};

export default BPM;
