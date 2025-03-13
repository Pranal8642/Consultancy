import { Target, Monitor, PenTool, BarChart, ArrowRight } from "lucide-react"; // Added Arrow Icon
import { useNavigate } from "react-router-dom"; // Import Navigation Hook

export default function CoreServices() {
  const navigate = useNavigate(); // React Router Navigation

  const services = [
    {
      icon: <Target className="w-12 h-12 text-blue-700" />,
      title: "Management Consulting",
      description: "Actionable insights and strategic guidance to optimize decision-making and drive sustainable growth.",
      image: "/MC.png",
      path: "/management", // Navigation path
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-700" />,
      title: "IT Consulting",
      description: "Leveraging technology to enhance operational efficiency and unlock new business opportunities.",
      image: "/IT.png",
      path: "/itconsultancy",
    },
    {
      icon: <PenTool className="w-12 h-12 text-blue-700" />,
      title: "Business Process Management (BPM)",
      description: "Streamlining workflows, improving productivity, and fostering a culture of continuous improvement.",
      image: "/BPM.png",
      path: "/bpm",
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-700" />,
      title: "Business Intelligence (BI)",
      description: "Integrating data-driven insights to support better decision-making and performance management.",
      image: "/BI.png",
      path: "/bi",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-center p-6 rounded-lg shadow-lg bg-white gap-6 
              ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Service Image */}
              <img src={service.image} alt={service.title} className="w-1/2 h-40 object-cover rounded-lg" />

              {/* Content */}
              <div className="w-1/2">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>

                {/* Arrow Button to Navigate */}
                <button
                  onClick={() => navigate(service.path)}
                  className="mt-4 flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-200"
                >
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
