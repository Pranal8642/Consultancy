import React from "react";
import Hero4 from "../pages/Hero4.jsx";

export default function AboutUs() {
    return (
        <section className="bg-gray-100 text-gray-900">
            {/* Hero Section */}
            <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/CA.png')" }}>
                <div className="absolute inset-0 bg-opacity-50"></div>
                <h1 className="relative text-5xl font-bold text-white text-center">
                    About Thanosphere Solutions
                </h1>
            </div>

            {/* About Content Section */}
            <div className="container mx-auto px-6 md:px-16 py-16">
                {/* Section 1 */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <img src="/About2.png" alt="Empowering Businesses"
                        className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-lg" />
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Empowering Businesses with Strategic Consulting</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At Thanosphere Solutions Pvt. Ltd., we empower businesses to achieve sustainable growth and operational excellence
                            through strategic consulting and technology-driven solutions. Specializing in Business Process Management (BPM),
                            strategic management, and custom software development, we help organizations streamline operations, enhance decision-making, and drive measurable results.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
                    <img src="/About3.png" alt="Beyond Advisory"
                        className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-lg" />
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Beyond Advisory – We Implement, You Succeed</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Unlike traditional consulting firms, we go beyond advisory—we actively implement solutions to ensure lasting impact.
                            Our agile, data-informed approach integrates business strategy, process optimization, and cutting-edge technology,
                            enabling companies to adapt, scale, and thrive in an evolving marketplace.
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <img src="/About4.png" alt="Tailored Solutions"
                        className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-lg" />
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Tailored Solutions for Efficiency & Innovation</h2>
                        <p className="text-gray-700 leading-relaxed">
                            From organizational assessments and workflow optimization to custom software development and business intelligence
                            integration, we deliver tailored solutions that enhance efficiency, innovation, and long-term success.
                        </p>
                    </div>
                </div>

                {/* Core Values Section */}
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
                <div>
                    <Hero4 />
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-4xl font-bold mb-4">Let’s Build the Future Together</h3>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                        Partner with us for a seamless transformation—where strategy meets execution for tangible business outcomes.
                    </p>

                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}