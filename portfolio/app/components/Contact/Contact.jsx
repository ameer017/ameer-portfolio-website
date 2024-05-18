import React from "react";

const Contact = () => {
  return (
    <main className="px-10 md:px-24 flex flex-col items-center justify-center text-center gap-50px pt-[7.75rem] pb-[5.75rem]" id="con">
      <p className="text-[#24262a] font-bold text-[20px] font-bold ">
        Contact.
      </p>

      <p className="my-2 text-[#4d5055] font-normal text-[15px] max-w-lg	 ">
        For any type of online project please don't hesitate to get in touch
        with me. The fastest way is to send me your message using the
        following email :{" "}
        <a href="mailto:rajiabdullahi907@gmail.com" className="text-blue-600">
          rajiabdullahi907@gmail.com
        </a>
      </p>

      <form className="flex flex-col gap-2 mt-4">
        <input
          type="text"
          className=" border w-[500px] max-w-lg rounded-lg p-2 outline-none"
        />
        <input
          type="text"
          className=" border w-[500px] max-w-lg rounded-lg p-2 outline-none"
        />
        <textarea className="border w-[500px] max-w-lg rounded-lg p-2 outline-none"></textarea>

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
