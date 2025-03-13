const Value = () => {
    return (
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          Thanosphere Solutions is dedicated to providing actionable insights, strategic guidance, and transformative solutions that enable SMEs to thrive.
        </p>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          <div>
            <span className="text-4xl">🤝</span>
            <h3 className="text-xl font-semibold mt-4">Collaboration</h3>
            <p className="text-gray-600 mt-2">We foster strong partnerships with our clients, working together to achieve shared success and sustainable growth.</p>
          </div>
          <div>
            <span className="text-4xl">💡</span>
            <h3 className="text-xl font-semibold mt-4">Innovation</h3>
            <p className="text-gray-600 mt-2">We bring fresh perspectives and creative solutions to every challenge, driving breakthrough results.</p>
          </div>
          <div>
            <span className="text-4xl">📊</span>
            <h3 className="text-xl font-semibold mt-4">Accountability</h3>
            <p className="text-gray-600 mt-2">We take full ownership of our commitments and deliver measurable results that matter.</p>
          </div>
          <div>
            <span className="text-4xl">🛡️</span>
            <h3 className="text-xl font-semibold mt-4">Integrity</h3>
            <p className="text-gray-600 mt-2">We operate with unwavering transparency and ethical principles in all our engagements.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Value;
  