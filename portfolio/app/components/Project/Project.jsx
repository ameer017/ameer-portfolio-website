import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { TfiExchangeVertical } from "react-icons/tfi";
import { BsSave2, BsTree } from "react-icons/bs";

const data = [
  {
    id: 1,
    title: "EarthFi",
    icon: <BsTree color="green" />,
    bg: "",
    description:
      "EarthFi is a platform that embodies the principles of Web3 technology, championing a transformative era for a regenerative economy. Our primary goal is to redefine the traditional notion of waste, elevating it from depletion to a valuable resource, thus nurturing a more sustainable and vibrant environment.",
  },
  {
    id: 2,
    title: "Hostel Management",
    icon: <BiBuildingHouse color="blue" />,
    description:
      "A comprehensive Hostel Management App designed to streamline the administration of hostel facilities. This app offers features such as room allocation, student registration. With an intuitive user interface and robust backend, the app ensures efficient and seamless management of hostel operations.",
  },
  {
    id: 3,
    title: "DEX",
    icon: <TfiExchangeVertical color="red" />,
    bg: "",
    description:
      "A Dapp that enables peer-to-peer trading of cryptocurrencies without intermediaries. This platform offers wallet integration, liquidity pools, automated market making. Built with a focus on security and user experience, it provides a seamless and efficient trading environment, empowering users to trade with confidence.",
  },
  {
    id: 4,
    title: "Auto Saver Dapp",
    icon: <BsSave2 color="green" />,
    bg: "",
    description:
      "An innovative Auto Saver Decentralized Application (DApp) designed to automate savings and investments using smart contracts on the blockchain. The platform allows users to set saving goals, schedule automatic transfers, and earn interest on their savings through decentralized finance (DeFi) protocols.",
  },
];

const Project = () => {
  return (
    <main className="px-10 md:px-24 flex gap-[50px] flex-wrap pt-[7.75rem] pb-[5.75rem]" id="pro">
      <div className="w-screen grid grid-cols-1 md:grid-cols-2	">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#24262a] font-Poppins text-center  text-[22px] font-bold">
            Projects.
          </p>
          <p className="text-[#24262a] font-Poppins text-center my-4 text-[15px]">
            Listed below are some of the most representative projects I've
            worked on.
          </p>
        </div>

        <div className="flex gap-5 items-center justify-center  mt-4 flex-wrap ">
          {data.map(({ id, title, icon, description, bg }) => (
            <div
              key={id}
              className="flex flex-col gap-3 border p-4 justify-end items-center rounded-lg md:w-[300px] w-[100%] "
            >
              <p className=" mt-2 text-[40px] ">{icon}</p>
              <p className="font-bold text-[18px] my-2 ">{title}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Project;
