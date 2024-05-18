import React from "react";

const data = [
  {
    id: 1,
    title: "Junior Developer",
    date: "2023 - Present",
    description: "DLT Africa Academy",
  },
  {
    id: 2,
    title: "Technical Ambassador",
    date: "2024 - Present",
    description: "LISK Africa DAO",
  },
];

const dataTwo = [
  {
    id: 3,
    title: "Freelance Developer",
    date: "2022 - Present",
    description: "Working happily on my own web projects",
  },

]

const About = () => {
  return (
    <main className="px-10 md:px-24 bg-[#f7f9fb] text-left flex gap-[50px] flex-wrap pt-[7.75rem] pb-[5.75rem]" id="about">
      <div className=" ">
        <p className="text-[#24262a] font-Poppins text-[20px] font-bold ">
          Hi there! I&apos;m Abdullahi Raji.
        </p>

        <p className="mb-1 text-[#4d5055] font-normal text-[15px] w-[100%] md:w-[600px] ">
          I&apos;m a passionate software developer with a strong foundation in
          creating innovative and efficient solutions. With 2 years+ of
          experience in the field I have honed my skills in javascript
          programming language, frameworks, and development methodologies.
        </p>
      </div>
      <div>
        {data.map(({ id, title, date, description }) => (
          <div key={id} className="flex flex-col gap-2">
            <p className="text-blue-600 mt-2">{date}</p>
            <p className="font-bold">{title}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <div>
        {dataTwo.map(({ id, title, date, description }) => (
          <div key={id} className="flex flex-col gap-2">
            <p className="text-blue-600 mt-2">{date}</p>
            <p className="font-bold">{title}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
      
    </main>
  );
};

export default About;
