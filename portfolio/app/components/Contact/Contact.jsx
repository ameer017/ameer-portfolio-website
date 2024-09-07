import React, { useState } from "react";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        alert("Form submission successful");
        setFormData(initialFormData); // Reset form fields to initial state
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <main
      className="px-10 md:px-24 flex flex-col items-center justify-center text-center gap-50px pt-[7.75rem] pb-[5.75rem]"
      id="con"
    >
      <p className="text-[#24262a] font-bold text-[20px] ">
        Contact.
      </p>

      <p className="my-2 text-[#4d5055] font-normal text-[15px] max-w-lg	 ">
        For any type of online project please don't hesitate to get in touch
        with me. The fastest way is to send me your message using the following
        email :{" "}
        <a href="mailto:rajiabdullahi907@gmail.com" className="text-green-700">
          rajiabdullahi907@gmail.com
        </a>
      </p>

      <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border w-[250px]  md:w-[500px] max-w-lg rounded-lg p-2 outline-none"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border w-[250px]  md:w-[500px] max-w-lg rounded-lg p-2 outline-none"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border  w-[250px] md:w-[500px] max-w-lg rounded-lg p-2 outline-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="bg-green-700 p-2 text-[#fff] mt-3 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
