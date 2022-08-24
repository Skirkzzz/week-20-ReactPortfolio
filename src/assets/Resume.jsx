import React from "react";
import { BsDownload } from "react-icons/bs";

const Resume = () => {
  return (
    <div name="resume" className="bg-[#000000] text-gray-300 w-full h-screen">
      {/* container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full mb-6 text-center">
          <h2 className="text-4xl text-gray-200 font-bold inline border-b-4 border-rose-500">
            Resu<span className="text-rose-500">me</span>
          </h2>
        </div>
        <div className="text-3xl mb-4 text-[##F8F9F9]">
          <p>Technologies and Skills</p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-4 gap-8 px-4">
          <div className="text-xl text-[##F8F9F9]">
            <p className="font-bold text-3xl ">Languages:</p>
            <ul>
              <li>HTML5</li>
              <li>Cascading Style Sheets (CSS)</li>
              <li>JavaScript (ES6)</li>
            </ul>
          </div>
          <div className="text-xl text-[##F8F9F9]">
            <p className="font-bold text-3xl">Frontend:</p>
            <ul>
              <li>Bootstrap</li>
              <li>JQuery</li>
              <li>Moment.js</li>
              <li>Handlebars.js</li>
              <li>JWT</li>
              <li>React</li>
              <li>Webpack</li>
              <li>Progressive Web Apps (PWA)</li>
            </ul>
          </div>
          <div className="text-xl text-[##F8F9F9]">
            <p className="font-bold text-3xl">Backend:</p>
            <ul>
              <li>Web API</li>
              <li>Server-Side API</li>
              <li>Third-Party API</li>
              <li>IndexedDB</li>
              <li>AJAX</li>
              <li>Fetch</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySql</li>
              <li>MongoDB</li>
              <li>Apollo GraphQL</li>
            </ul>
          </div>
          <div className="text-xl text-[##F8F9F9]">
            <p className="font-bold text-3xl">Other:</p>
            <ul>
              <li>Insomnia</li>
              <li>JSON</li>
              <li>GitHub</li>
              <li>Jest</li>
              <li>MERN Stack</li>
            </ul>
          </div>
          <div></div>
        </div>
        <a
          href="https://docs.google.com/document/d/1K73iQX74tsR57XNCsb1MDjAFbQMZD02IcBBGZAaN9pA/edit?usp=sharing"
          target="#"
        >
          <button className="text-gray-200 group border-2 px-6 py-3 my-2 flex items-center border-gray-200 rounded-lg hover:bg-[#000000] hover:border-rose-500 hover:text-rose-500">
            Download My Resume
            <span>
              <BsDownload className="ml-3" />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
