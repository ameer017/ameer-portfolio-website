import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import { FaCode, FaDesktop } from "react-icons/fa";
const data = [
  {
    id: 1,
    title: "DESIGN",
    icon: <MdOutlineDiamond />,
    description:
      "I am skilled in designing and developing websites using various programming languages and design tools. I am constantly staying updated with the latest trends and technologies in web design to ensure that my clients receive the most innovative and effective solutions.",
  },
  {
    id: 2,
    title: "DEVELOPMENT",
    icon: <FaCode />,
    description:
      "I can develop, maintain websites and web applications as well as create the structure, layout, and interactivity of a website. I also work with server-side technologies, databases, and APIs to ensure the website functions properly and interacts with users and other systems.",
  },
  {
    id: 3,
    title: "UI/UX",
    icon: <FaDesktop />,
    description:
      "My design involves extensive research, wire framing, prototyping to ensure that the final product meets user needs and business goals. By combining creativity with user insights, I strive to craft meaningful and delightful experiences that resonate with users.",
  },
];

const Service = () => {
  return (
    <main className="px-10 md:px-24 flex gap-[50px] flex-wrap pt-[7.75rem] pb-[5.75rem]" id="ser">
      <div className="w-screen">
        <p className="text-[#24262a] font-Poppins text-center  text-[22px] font-bold">
          Offered services.
        </p>

        <div className="flex gap-5 items-center justify-center mt-4 flex-wrap ">
          {data.map(({ id, title, icon, description }) => (
            <div
              key={id}
              className="flex flex-col gap-3 border p-4 rounded-lg md:w-[300px] w-[100%] "
            >
              <p className="text-blue-600 mt-2 text-[40px] ">{icon}</p>
              <p className="font-bold text-[18px] ">{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Service;
