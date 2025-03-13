import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-3 gap-10">
        
        {/* Left Section - Company Description */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Thanosphere Solutions Pvt. Ltd.</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            At Thanosphere Solutions, we empower businesses to achieve sustainable growth and operational excellence 
            through strategic consulting and process-driven solutions. Specializing in Business Process Management (BPM), 
            strategic management, and technology advisory, we help organizations streamline operations, optimize 
            decision-making, and drive measurable outcomes.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-3">
            Unlike traditional consulting firms, we go beyond advisory—we actively engage in implementing strategies and 
            process improvements to ensure lasting impact. Our agile, data-informed approach integrates business strategy, 
            process optimization, and technology enablement, allowing companies to adapt, scale, and thrive in an evolving 
            marketplace.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <a href="#" className="hover:underline text-sm text-gray-600">About</a>
          <a href="#" className="hover:underline text-sm text-gray-600">Services</a>
          {/* <a href="#" className="hover:underline text-sm text-gray-600">Careers</a> */}
          {/* <a href="#" className="hover:underline text-sm text-gray-600">Blog</a> */}
          <a href="#" className="hover:underline text-sm text-gray-600">Contact</a>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h3 className="text-lg font-semibold">How can we assist you?</h3>
          <p className="text-sm text-gray-600 mt-2">
            We value the opportunity to connect with you. Please submit your inquiries and feedback, and our 
            experienced professionals are ready to assist you.
          </p>
          <button onClick={()=>navigate("/contact")} className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            CONTACT US →
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 px-6 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo & Policies */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold">Thanosphere Solutions</h2>
            <p className="text-xs text-gray-500 mt-2">© 2025 Thanosphere Solutions Pvt. Ltd. All rights reserved.</p>
          </div>

          {/* Legal Links */}
          {/* <div className="flex space-x-4 text-xs text-gray-600 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Responsible Disclosure</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
          </div> */}

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-black"><FaLinkedinIn size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-black"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-black"><FaXTwitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-black"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-black"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
