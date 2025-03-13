import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    consultancy: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.contact.match(/^\d{10}$/)) errors.contact = "Enter a valid 10-digit phone number";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) errors.email = "Enter a valid email address";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.consultancy) errors.consultancy = "Please select a consultancy type";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("🚀 Form Submitted!"); // Debugging Log

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("❌ Validation Errors:", validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mjkybdle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("✅ API Response:", result); // Debugging Log

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          contact: "",
          email: "",
          address: "",
          consultancy: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div>
      <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/CA.png')" }}>
        <div className="absolute inset-0 bg-opacity-50"></div>
        <h1 className="relative text-5xl font-bold text-white text-center">Contact Us</h1>
      </div>
      
      <div className="max-w-6xl mx-auto my-10 p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Information */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Let's Start a Conversation</h2>
          <p className="text-gray-600 mb-6">Ask how we can help you:</p>
          <ul className="text-gray-700 space-y-4">
            <li><strong>See our platform in action</strong><br />Request a personalized demo of Consultancy.</li>
            <li className="flex items-center space-x-2"><AiOutlineMail /><span>buisness@thanosphere.com</span></li>
            <li className="flex items-center space-x-2"><AiFillPhone size={25}/><span>+91 - 9309941268</span></li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Points of Contact</h3>
          <p className="text-gray-700">India | Thanosphere Solutions</p>
          <p className="text-gray-600">S.No. 5/2,Samta Hsg. Soc., Nakhate Nagar,<br />Thergaon,Pune City,Pune-411033,Maharashtra</p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>

          {/* Success / Error Messages */}
          {status === "success" && <p className="text-green-500 text-center">✅ Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500 text-center">❌ Error sending message. Please try again.</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            {errors.contact && <p className="text-red-500">{errors.contact}</p>}

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            {errors.address && <p className="text-red-500">{errors.address}</p>}

            <select name="consultancy" value={formData.consultancy} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="" disabled>Select Consultancy Type</option>
              <option value="bpm">BPM</option>
              <option value="it-consultancy">IT Consultancy</option>
              <option value="BI">Buisness Intelligence</option>
              <option value="Management">Management Consultancy</option>
              <option value="other">Other</option>
            </select>
            {errors.consultancy && <p className="text-red-500">{errors.consultancy}</p>}

            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}

            <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
