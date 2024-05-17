import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import { FaCode, FaDesktop } from "react-icons/fa";
const data = [
  {
    id: 1,
    title: "DESIGN",
    icon: <MdOutlineDiamond />,
    description: "DLT Africa Academy",
  },
  {
    id: 2,
    title: "DEVELOPMENT",
    icon: <FaCode />,
    description: "LISK Africa DAO",
  },
  {
    id: 2,
    title: "BASIC SEO",
    icon: <FaDesktop />,
    description: "LISK Africa DAO",
  },
];

const Service = () => {
  return (
    <main className="px-10 md:px-24 flex gap-[50px] flex-wrap pt-[7.75rem] pb-[5.75rem]">
      <div className="w-screen">
        <p className="text-[#24262a] font-Poppins text-center  text-[20px] font-bold ">
          Offered services.
        </p>

        <div className="flex gap-5 items-center justify-center mt-4 flex-wrap ">
          {data.map(({ id, title, icon, description }) => (
            <div key={id} className="flex flex-col gap-3 border p-4 rounded-lg w-[300px] ">
              <p className="text-blue-600 mt-2 text-[40px] ">{icon}</p>
              <p className="font-bold">{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Service;
