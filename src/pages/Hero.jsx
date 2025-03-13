import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

import { Mail, MapPin, Phone } from "lucide-react";

export default function HomePage() {
    const navigate = useNavigate();
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center p-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/2.png')" }} // Change with actual image path
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div> 

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-4">
          
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center py-20">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-5xl font-bold">Your Success, Our Business</h2>
            <p className="text-white/80">
              We help businesses achieve their goals with expert consulting services.
            </p>
            <button onClick={() => navigate("/services")} className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md">
      How Can We Help?
    </button>
          </div>

          {/* Image Section */}
          {/* <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img 
              src="/4.png" 
              alt="Business Illustration" 
              className="w-80 drop-shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
