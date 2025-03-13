import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ITConsultancy() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          IT Consultancy Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide expert IT solutions to help businesses thrive in the digital era. 
          From cloud computing to cybersecurity, we guide you through every step.
        </p>
        {/* <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-lg rounded-lg">
          Get a Consultation
        </Button> */}
      </section>

      {/* Services Section */}
      <section className="mt-12 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Need IT Solutions?</h2>
        <p className="text-gray-600 mt-2">
          Reach out to us for a tailored consultation.
        </p>
        <Button onClick={()=>navigate("/contact")} className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-lg rounded-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
}

// Services Data
const services = [
  { title: "Cloud Solutions", description: "Migrate and manage cloud-based infrastructures with ease." },
  { title: "Cybersecurity", description: "Secure your business from digital threats and cyber attacks." },
  { title: "Software Development", description: "Custom-built applications for enterprise and startups." },
];


