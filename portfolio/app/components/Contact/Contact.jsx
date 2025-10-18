import React, { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaUser, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://ameer-portfolio-website-backend.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData(initialFormData);
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="relative px-6 md:px-24 pt-[7.75rem] pb-[5.75rem] bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden"
      id="con"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <HiSparkles className="text-yellow-500 text-2xl" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Get In Touch
            </h2>
            <HiSparkles className="text-yellow-500 text-2xl" />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="slide-in-left space-y-6">
            {/* Email Card */}
            <div className="glass p-6 rounded-2xl border border-white/20 shadow-xl card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Email Me</h3>
                  <p className="text-gray-600 text-sm">I'll respond within 24 hours</p>
                </div>
              </div>
              <a 
                href="mailto:rajiabdullahi907@gmail.com" 
                className="text-purple-600 hover:text-purple-700 font-medium break-all transition-colors"
              >
                rajiabdullahi907@gmail.com
              </a>
            </div>

            {/* Why Contact Card */}
            <div className="glass p-6 rounded-2xl border border-white/20 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                {[
                  "Fast & reliable communication",
                  "Quality-driven development",
                  "Modern tech stack expertise",
                  "Flexible and adaptive approach"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/20 shadow-xl space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-purple-500 focus:shadow-lg bg-white/50"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-purple-500 focus:shadow-lg bg-white/50"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 focus:border-purple-500 focus:shadow-lg resize-none bg-white/50"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient px-6 py-4 text-white rounded-xl font-semibold text-lg shadow-lg inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 border border-green-300 rounded-xl text-green-700 flex items-center gap-3 animate-fadeIn">
                  <FaCheckCircle className="text-xl" />
                  <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 border border-red-300 rounded-xl text-red-700 animate-fadeIn">
                  <span className="font-medium">Oops! Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
