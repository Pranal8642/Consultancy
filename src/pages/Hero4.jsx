export default function ManagingDirector() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
          
          {/* Left Side - Background Image */}
          <div 
            className="h-96 md:h-auto"
            style={{
              backgroundImage: "url('/3.png')", // Replace with your image
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
  
          {/* Right Side - Managing Director Info */}
          <div className="bg-blue-900 text-white p-8 flex flex-col justify-center">
            {/* Placeholder for Profile Image */}
            <div className="w-28 h-28 bg-white rounded-md mb-4"></div>
  
            <h2 className="text-2xl font-bold">Aditya Changdev Pansare</h2>
            <h3 className="text-lg font-medium">Founding Director</h3>
  
            <p className="mt-4 text-white/80">
              With 8 years of experience in BPM and performance management, Aditya drives 
              strategic planning and operational excellence. He ensures data-driven 
              decision-making, guiding SMEs toward sustainable, growth-oriented transformations.
            </p>
  
            {/* Company Logo */}
            <div className="mt-6 flex justify-start">
              <img src="/Logoc.png" alt="Thanosphere Solutions" className="w-32" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  