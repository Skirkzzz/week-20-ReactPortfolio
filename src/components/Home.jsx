import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import MyImage from "../assets/photo-selinakirkham.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center xl:flex-row items-center xl:justify-between h-full">
        {/* <div> */}
        <img
          className="flex h-[200px] w-[200px] md:h-[200px] md:w-[200px] rounded-2xl drop-shadow-xl"
          src={MyImage}
          alt="Selina Kirkham"
        />
        {/* </div> */}
        <div className="pl-12">
          <h2 className="text-[#dddddd] text-lg">Hello,</h2>
          <p className="text-[#dddddd] text-lg">My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-rose-500">
            Selina Kirkham
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#dddddd]">
            I am a <span className="text-teal-500"> full stack developer </span>
          </h2>
          <p className="text-[#dddddd] py-4 max-w-[700px]">
            I am an accomplished ex Big Four Finance Director with 15 years of
            diverse experience and a track record of driving major growth and
            optimal standards of quality, efficiency and profitability via
            motivational leadership, astute strategic development and robust
            operational management.{" "}
          </p>

          {/* <div> */}
          <button className="text-gray-200 group border-2 px-6 py-3 my-2 flex items-center border-gray-200 rounded-lg hover:bg-[#000000] hover:border-rose-500 hover:text-rose-500">
            <Link to="projects" smooth={true} duration={500}>
              Coding Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
