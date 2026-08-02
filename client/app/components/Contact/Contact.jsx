"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

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
        },
      );

      if (!response.ok) {
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setFormData(initialFormData);
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-0 py-3 bg-transparent border-0 border-b border-neutral-800 rounded-none outline-none text-white placeholder:text-neutral-600 focus:border-neutral-500 transition-colors";

  return (
    <main
      className="relative px-6 md:px-12 lg:px-24 pt-24 pb-24 bg-black border-t border-white/5"
      id="con"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4 font-medium">
              Contact
            </p>
            <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Let&apos;s build something.
            </h2>
            <p className="text-neutral-500 text-base md:text-[17px] leading-relaxed max-w-sm mb-8">
              Have a project in mind or want to collaborate? Send a message — I
              usually reply within a day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-wide uppercase text-neutral-500 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={inputClass}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-wide uppercase text-neutral-500 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs tracking-wide uppercase text-neutral-500 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none`}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-sm text-emerald-400">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
