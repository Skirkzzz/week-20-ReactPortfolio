import React from "react";
import DayScheduler from "../assets/4WorkDayScheduler.png";
import WeatherMap from "../assets/5WeatherMap.png";
import HighScores from "../assets/portfoli3HighScores.png";
import RealWorldNews from "../assets/Portfolio2RealWorldNews.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-gray-700"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full mb-6 text-center">
          <h2 className="text-4xl text-gray-200 font-bold inline border-b-4 border-rose-500">
            Project<span className="text-rose-500">s</span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center mb-8 text-lg">
          <p>Please find my projects on GitHub.</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${RealWorldNews})` }}
            className="drop-shadow-2xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover animation */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-gray-200 tracking-wider m-2">
                Real World News
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Skirkzzz/Real_World_News"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Deployment
                  </button>
                </a>
                <a
                  href="https://github.com/Skirkzzz/week-9-ReadMeGenerator"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Repository
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${DayScheduler})` }}
            className="drop-shadow-2xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover animation */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-gray-200 tracking-wider m-2">
                Readme Generator
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Skirkzzz/Real_World_News"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Deployment
                  </button>
                </a>
                <a
                  href="https://github.com/Skirkzzz/week-9-ReadMeGenerator"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${HighScores})` }}
            className="drop-shadow-2xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover animation */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-gray-200 tracking-wider m-2">
                Note Taker
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Skirkzzz/Real_World_News"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Deployment
                  </button>
                </a>
                <a
                  href="https://github.com/Skirkzzz/week-9-ReadMeGenerator"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${DayScheduler})` }}
            className="drop-shadow-2xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover animation */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-gray-200 tracking-wider m-2">
                Work Scheduler App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Skirkzzz/Real_World_News"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Deployment
                  </button>
                </a>
                <a
                  href="https://github.com/Skirkzzz/week-9-ReadMeGenerator"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${WeatherMap})` }}
            className="drop-shadow-2xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover animation */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-gray-200 tracking-wider m-2">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Skirkzzz/Real_World_News"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Deployment
                  </button>
                </a>
                <a
                  href="https://github.com/Skirkzzz/week-9-ReadMeGenerator"
                  target="#"
                >
                  <button className="text-center text-gray-200 rounded-lg px-4 py-3 m-2 text-base border hover:border-gray-900 hover:text-gray-900">
                    Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
