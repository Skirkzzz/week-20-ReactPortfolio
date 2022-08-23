import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/fe9de62a-5eae-44a7-a85e-bdf2dbcdaa4a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="max-w-[1000px] w-full mb-6 text-center">
          <h2 className="text-4xl text-gray-200 font-bold inline border-b-4 border-rose-500">
            Contact<span className="text-rose-500"> Me</span>
          </h2>
        </div>
        <div className="mt-8">
          <p className="text-[#F8F9F9] text-xl py-4 text-center">
            {" "}
            Send a message by email:{" "}
            <a className="text-rose-500" href="mailto:selinakirk82@gmail.com">
              selina.Kirkham@gmail.com
            </a>
          </p>
          <p className="text-[#F8F9F9] text-xl py-4 text-center">
            {" "}
            <span className="text-rose-500">---</span> OR{" "}
            <span className="text-rose-500">---</span>
          </p>
          <p className="text-[#F8F9F9] text-xl py-4">
            For enquiries please fill out the form below:
          </p>
        </div>
        <input
          className="bg-[#F8F9F9] p-2 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#F8F9F9] rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#F8F9F9] p-2 rounded-lg"
          name="message"
          rows="10"
          placeholder="Type your message here..."
        ></textarea>
        <button className="text-gray-200 border-2 hover:text-rose-500 hover:border-rose-500 px-8 py-4 my-8 mx-auto items-center border-gray-200 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
