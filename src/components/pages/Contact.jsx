import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Send } from "lucide-react";
import { Instagram, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_p4jsv3r", // Your service ID
        "template_rup62mm", // Your template ID
        templateParams,
        "dLHC9bfTyMyukMUKm" // Your public key
      )
      .then(
        (res) => {
          console.log("Email sent successfully:", res);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-blue-700 text-white px-4 lg:px-10 py-10 relative z-1 ">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif ">
            Contact Me 📬
          </h1>
        </div>

        {/* Contact Form Container */}
        <div className="w-full max-w-6xl mx-auto bg-white text-black rounded-2xl shadow-lg border border-gray-300 p-6 md:p-10">
          {/* Google Map */}
          <div className="w-full h-48 lg:h-64 rounded-lg overflow-hidden mb-6">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0014947254123!2d76.02951947489127!3d11.801408888598134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ff8f030ec337%3A0xf3f44e68c5b65b3!2sMANHAJ%20KUNDALA!5e0!3m2!1sen!2sin!4v1709746745239!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-100 border border-gray-400 outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-100 border border-gray-400 outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-400 outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="flex items-center gap-2 bg-gray-300 text-gray-700 hover:bg-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
     <div className="bg-black text-white text-center py-4  relative z-1 ">
      
      <div className="flex justify-center gap-6 mt-2">
        <a
          href="https://www.instagram.com/jashir_mhd/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <Instagram size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammedjashir/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="https://github.com/Muhammedjashir"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Github size={24} />
        </a>
      </div>
      <p className="mt-5">+91 7356 490 668</p>
      <p className="mb-2 mt-5 ">Thank you for reaching out! I'll get back to you soon.</p>
    </div>
    </>
  );
};

export default Contact;
