import React from "react";

const HeroSection = () => {
  return (
    <main
      className="h-[70vh] md:h-[90vh] flex items-center justify-center md:justify-start px-24"
      style={{
        backgroundImage: `url(${"https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#333",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col ">
        <p className="text-[#fff] text-[15px] md:text-[20px] w-[300px] text-center md:w-[550px] md:text-left">
          I specialize in the artful conception and meticulous construction of
          outstanding products. By leveraging my skills in design and
          development, I craft solutions that not only meet but exceed
          expectations.
        </p>
        <div className="flex gap-[10px] mt-2 justify-center md:justify-start">
          <a href="https://docs.google.com/document/d/13rlZy5yG3xnefqtAtbOEo88FZiZdaEEwXOn-vBST35o/edit?usp=sharing" className="bg-blue-500 px-4 py-2 text-[15px] text-[#fff] rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            Resumé
          </a>
          <button className="px-4 py-2 text-[15px] text-[#fff]  rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            {/* Contact me */}
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
