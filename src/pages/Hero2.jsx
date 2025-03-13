import React from "react";

const MissionSection = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center bg-cover bg-center px-6 md:px-16"
      style={{ backgroundImage: "url('/missio.png')" }} // Update with actual background path
    >
      <div className="absolute inset-0 bg-white"></div> {/* Dark overlay */}

      {/* Left-aligned Mission Box */}
      <div className="relative lg:w-1/2 bg-white/80 shadow-2xl rounded-xl p-12 border-l-8 border-blue-700 backdrop-blur-md">
        
        {/* Decorative Quotes */}
        <div className="absolute top-6 left-6 text-gray-300 text-6xl font-serif opacity-50">“</div>
        <div className="absolute bottom-6 right-6 text-gray-300 text-6xl font-serif opacity-50">”</div>

        {/* Mission Content */}
        <h2 className="text-5xl font-bold text-blue-900">MISSION</h2>

        <p className="mt-6 text-lg text-gray-900 leading-relaxed">
          At <span className="font-bold text-blue-700">Thanosphere Solutions Pvt. Ltd.</span>, we empower
          businesses to achieve sustainable growth and operational excellence.
          Drawing on our expertise in strategic management, project
          management, and Business Process Management (BPM) - guided by
          agile, data-informed methods.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          We deliver integrated consulting and technology solutions that
          streamline operations and enhance decision-making.
        </p>

        {/* Company Logo */}
        <div className="flex justify-start mt-10">
          <img
            src="/Logoc.png"
            alt="Thanosphere Solutions Logo"
            className="w-40 drop-shadow-lg"
          />
        </div>
      </div>
      
      {/* Right-aligned Content Section (Column-wise and Lowered Slightly) */}
      <div className="relative lg:w-1/2 flex flex-col justify-start text-left py-32 px-10 space-y-8 ">
        <h2 className="text-5xl font-bold text-blue-900">Design. Optimize. Transform.</h2>

        {/* Step 1 */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-blue-900 mt-2">Design</h3>
          <p className="text-lg text-gray-700 mt-2">
            We craft tailored strategies and solutions based on our deep consulting and BPM expertise.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-blue-900 mt-2">Optimize</h3>
          <p className="text-lg text-gray-700 mt-2">
            We streamline operations, integrate BI tools, and enhance decision-making capabilities.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-blue-900 mt-2">Transform</h3>
          <p className="text-lg text-gray-700 mt-2">
            We modernize operations, enable growth, and deliver sustainable success for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
