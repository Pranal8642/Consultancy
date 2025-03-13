import  Card  from "../components/ui/card";
import  CardContent  from "../components/ui/card";
import  Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";

function Management() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 mt-20 flex flex-col items-center py-10">
      {/* Hero Section */}
      <header className="w-full text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Management Consultancy</h1>
        <p className="text-lg text-gray-600 mt-2">Optimizing your business for success</p>
      </header>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        <ServiceCard
          title="Business Strategy"
          description="Develop winning strategies to enhance growth and efficiency."
        />
        <ServiceCard
          title="Process Optimization"
          description="Streamline your business processes for maximum productivity."
        />
        <ServiceCard
          title="Financial Advisory"
          description="Optimize financial management and investment planning."
        />
        <ServiceCard
          title="HR & Talent Management"
          description="Attract and retain top talent for organizational success."
        />
        <ServiceCard
          title="Market Research"
          description="Gain deep insights into your industry and competitors."
        />
        <ServiceCard
          title="Risk Management"
          description="Identify and mitigate risks to safeguard your business."
        />
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Get Expert Consultancy</h2>
        <p className="text-gray-600 mt-2">Let’s work together to take your business to the next level.</p>
        <Button onClick={()=>navigate("/contact")} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Contact Us
        </Button>
      </div>
    </div>
  );
}

// Service Card Component
const ServiceCard = ({ title, description }) => {
  return (
    <Card className="shadow-lg rounded-xl bg-white p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Management;
