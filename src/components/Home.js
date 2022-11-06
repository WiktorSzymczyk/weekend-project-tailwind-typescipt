import React from "react";
import "../index.css";
import seo from "../components/img/seo.png";
import wind from "../components/img/wind.png";
import physics from "../components/img/physics.png";
import "./index.ts";

function Home() {
  return (
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-center pt-20 h-full">
      <h1 className="font-sans text-4xl text-white font-medium">
        Welcome to my portfolio!
      </h1>
      <p className="font-sans text-xl text-white pt-20">
        This is some description
      </p>

      <div className="pt-20">
        <button className="bg-indigo-600 text-white p-2 rounded hover:text-neutral-200 font-semibold">
          Contact Me
        </button>
      </div>
      <div className="gap-8 columns-3 px-5 pt-10">
        <div className="bg-white rounded-xl h-fit p-5 border-4 border-indigo-600">
          <img src={seo} alt="" className="px-20" />
          <h1 className="font-medium text-2xl">TITLE</h1>
          <p className="text-md">SOME DESC1</p>
        </div>

        <div className="bg-white rounded-xl h-fit p-5 border-4 border-indigo-600">
          <img src={physics} alt="" className="px-20" />
          <h1 className="font-medium text-2xl">React</h1>
          <p>
            I have started using React a couple of weeks ago and I have to say
            it is absolutely amazing
          </p>
        </div>

        <div className="bg-white rounded-xl h-fit p-5 border-4 border-indigo-600">
          <img src={wind} alt="" className="px-20" />
          <h1 className="font-medium text-2xl">TITLE</h1>
          <p>SOME DESC1</p>
        </div>
      </div>
      <div className="bg-blue-200">
        <h1>dshad</h1>
      </div>
    </div>
  );
}

export default Home;
