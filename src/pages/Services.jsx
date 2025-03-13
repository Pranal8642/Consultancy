import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Management Consulting",
    description: "Actionable insights and strategic guidance to optimize decision-making and drive sustainable growth.",
    image: "MC.png",
    path: "/management",
  },
  {
    id: 2,
    title: "IT Consulting",
    description: "Leveraging technology to enhance operational efficiency and unlock new business opportunities.",
    image: "IT.png",
    path: "/it-consulting",
  },
  {
    id: 3,
    title: "Business Process Management (BPM)",
    description: "Streamlining workflows, improving productivity, and fostering a culture of continuous improvement.",
    image: "BPM.png",
    path: "/bpm",
  },
  {
    id: 4,
    title: "Business Intelligence (BI)",
    description: "Integrating data-driven insights to support better decision-making and performance management.",
    image: "BI.png",
    path: "/BI", // ✅ Fixed path (lowercase and correct structure)
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-gray-900">
        Our <span className="text-blue-600">Services</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row items-center gap-8 bg-white shadow-xl rounded-lg p-6 transition transform hover:scale-105"
          >
            {/* Service Image */}
            <div className="relative w-full md:w-1/2">
              <div className="rounded-lg p-2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Service Content */}
            <div className="w-full md:w-1/2 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              <p className="text-gray-700 mt-2">{service.description}</p>
              <button
                className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md 
                hover:bg-blue-700 transition-transform transform hover:scale-105"
                onClick={() => navigate(service.path)} // ✅ Fixed the navigation issue
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
