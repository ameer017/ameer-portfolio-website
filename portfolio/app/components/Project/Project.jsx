import React from "react";
import { VscDebugDisconnect } from "react-icons/vsc";
import { BiBuildingHouse } from "react-icons/bi";
import { TfiExchangeVertical } from "react-icons/tfi";
import { BsSave2, BsTree } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegEye, FaGithub } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "EarthFi",
    icon: <BsTree color="#2a52be" />,
    bg: "",
    description:
      "EarthFi is a platform that embodies the principles of Web3 technology, championing a transformative era for a regenerative economy. Our primary goal is to redefine the traditional notion of waste, elevating it from depletion to a valuable resource, thus nurturing a more sustainable and vibrant environment.",
    urlOne: "https://www.earthfi.xyz",
    urlTwo: "https://github.com/ameer017/avocet-frontend"
  },
  {
    id: 2,
    title: "Hostel Management",
    icon: <BiBuildingHouse color="black" />,
    description:
      "A comprehensive Hostel Management App designed to streamline the administration of hostel facilities. This app offers features such as room allocation, student registration. With an intuitive user interface and robust backend, the app ensures efficient and seamless management of hostel operations.",
    urlOne: "#",
    urlTwo: "https://github.com/ameer017/Hostel_management"
  },
  {
    id: 3,
    title: "DEX",
    icon: <TfiExchangeVertical color="red" />,
    bg: "",
    description:
      "A Dapp that enables peer-to-peer trading of cryptocurrencies without intermediaries. This platform offers wallet integration, liquidity pools, automated market making. Built with a focus on security and user experience, it provides a seamless and efficient trading environment, empowering users to trade with confidence.",
    urlOne: "#",
    urlTwo: "https://github.com/ameer017/de-exchange"
  },
  {
    id: 4,
    title: "Auto Saver Dapp",
    icon: <BsSave2 color="gold" />,
    bg: "",
    description:
      "An innovative Auto Saver Decentralized Application (DApp) designed to automate savings and investments using smart contracts on the blockchain. The platform allows users to set saving goals, schedule automatic transfers, and earn interest on their savings through decentralized finance (DeFi) protocols.",
    urlOne: "#",
    urlTwo: "https://github.com/ameer017/Auto-saver"
  },
  {
    id: 5,
    title: "Ummah Connect",
    icon: <VscDebugDisconnect color="green" />,
    bg: "",
    description:
      "UmmahConnect is an innovative platform that fosters a sense of community and belonging among Muslims worldwide. By leveraging modern technology, UmmahConnect provides educational resources, community forums, networking opportunities, and various tools to enhance the spiritual and social lives of its users.",
    urlOne: "https://ummah-connect.vercel.app",
    urlTwo: "https://github.com/ameer017/ummah-connect"
  },
  {
    id: 6,
    title: "Celo Shop",
    icon: <GiShoppingCart color="purple" />,
    bg: "",
    description:
      "A decentralized online marketplace built on Web3 technology, offering users a seamless shopping experience with enhanced security and transparency. It empowers buyers and sellers by leveraging blockchain for transactions, and features a unique loyalty program that rewards users for their engagement and purchases.",
    urlOne: "https://celo-shop-to-earn.vercel.app",
    urlTwo: "https://github.com/ameer017/celo-earn"
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
          {data.map(({ id, title, icon, description, bg, urlOne, urlTwo }) => (
            <div
              key={id}
              className="flex flex-col gap-3 border p-4 justify-end items-center rounded-lg md:w-[300px] w-[100%] relative "
            >
              <p className=" mt-2 text-[40px] ">{icon}</p>
              <p className="font-bold text-[18px] my-2 ">{title}</p>
              <p>{description}</p>

              <div className="flex absolute  top-2 right-2 w-[100%] h-[100%] justify-end items-start bg-opacity-50 gap-3">
                <a href={urlOne} className="transform transition-transform duration-300 hover:scale-110" target="_blank">
                  <FaRegEye size={25} />
                </a>
                <a href={urlTwo} className="transform transition-transform duration-300 hover:scale-110" target="_blank">
                  <FaGithub size={25} />
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Project;
