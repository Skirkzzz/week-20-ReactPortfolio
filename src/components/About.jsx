import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-700 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full mb-6 text-center">
          <h2 className="text-4xl text-gray-200 font-bold inline border-b-4 border-rose-500">
            About <span className="text-rose-500">Me</span>
          </h2>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#F8F9F9]">
          <div className="sm:text-right text-3xl">
            <p>
              I am an accomplished ex Big Four Finance Director with 15 years of
              diverse experience and a track record of driving major growth and
              optimal standards of quality, efficiency and profitability via
              motivational leadership, astute strategic development and robust
              operational management.{" "}
            </p>
          </div>
          <div className="text-3xl">
            <p>
              I am adept in identifying and realising opportunities for process
              improvement and empowering senior decision-makers via insightful
              analysis and clear and accurate reporting.I am a dedicated,
              adaptable and resilient leader with a proactive, analytical and
              results-driven approach. I am renowned for rapidly delivering
              pragmatic solutions to complex challenges and establishing
              harmonious, enduring and productive relationships with internal
              and external stakeholders.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
