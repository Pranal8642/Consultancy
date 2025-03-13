import React from "react";

export default function ClientSuccessStories() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Client Success Stories
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Success Story 1 - Videohms Agencies */}
          <div className="text-center">
            <img
              src="/About5.png"
              alt="Videohms Agencies"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Videohms Agencies</h3>
            <p className="text-gray-800 font-bold mt-1">25% Productivity Boost</p>
            <p className="text-gray-600 mt-2">
              Thanosphere helped us streamline our operations, integrate business 
              intelligence, and transform our decision-making process. As a result, 
              we've seen dramatic improvements in our operational efficiency.
            </p>
          </div>

          {/* Success Story 2 - Electrodada */}
          <div className="text-center">
            <img
              src="/About6.png"
              alt="Electrodada"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Electrodada</h3>
            <p className="text-gray-800 font-bold mt-1">40% Revenue Growth</p>
            <p className="text-gray-600 mt-2">
              The Thanosphere team's expertise in management consulting and 
              custom software development has been invaluable. They've helped us 
              optimize our workflows and develop a cutting-edge platform that 
              has given us a competitive edge in the market.
            </p>
          </div>

          {/* Success Story 3 - Trezure */}
          <div className="text-center">
            <img
              src="/About7.png"
              alt="Trezure"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Trezure</h3>
            <p className="text-gray-800 font-bold mt-1">Increased Efficiency</p>
            <p className="text-gray-600 mt-2">
              Thanosphere's holistic approach to business process management and 
              IT consulting has been transformative for our organization. We've 
              increased efficiency, improved decision-making, and achieved 
              sustainable growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
