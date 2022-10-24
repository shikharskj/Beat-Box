import React from "react";
import loginPageIllustration from "../assets/images/Professional-Dancer.svg";
import { LOGIN_URL } from "../spotify-config";
import loader from "../assets/images/loader-circles.gif";
import logo from "../assets/images/logo.png";

const Login = () => {
  return (
    <div className="flex flex-grow flex-col md:flex-row h-screen bg-[#151279] text-white">
      <div>
        <div className="flex xl:flex-row flex-col justify-start items-center mt-12 mb-4 md:hidden">
          <img
            src={logo}
            alt="logo"
            className="md:h-12 md:w-12 md:m-0 mb-2 h-14 rounded-full w-full "
          />
          <p className="ml-3 text-6xl text-md text-white mb-1">Beat-box</p>
        </div>
        <div className="flex justify-center items-center flex-2 md:p-5 md:mt-10 mt-5">
          <img
            className=""
            src={loginPageIllustration}
            alt="loginPageIllustration"
          />
        </div>
      </div>
      <div className="flex-col justify-center items-start pb-20 flex-1 text-6xl md:flex hidden">
        <div className="flex flex-col px-5">
          <p className="text-xl ml-2">Music Application</p>
          <p className="mb-2 font-bold">Alone, it's music.</p>
          <p className="font-bold">Together, it's magic...</p>
        </div>
        <div className="md:mt-10">
          <a href={LOGIN_URL} className="">
            <button className="bg-[#BFBBFF] hover:bg-[#968ffa] flex justify-center items-center font-bold text-black text-4xl px-8 py-3 rounded-full">
            <img src={loader} alt="play" className="h-20 w-20 mr-1" />
              PLAY NOW
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-10 md:hidden">
        <div className="mt-10">
          <a href={LOGIN_URL} className="">
            <button className="bg-[#BFBBFF] hover:bg-[#918ae6] flex justify-center items-center font-bold text-black text-3xl px-4 py-1 rounded-lg">
              <img src={loader} alt="play" className="h-20 w-20 mr-1" />
              PLAY NOW
            </button>
          </a>
        </div>
        <div className="text-3xl text-center mt-10">
          <p>
            <b>Alone</b>, it's music.
          </p>
          <p>
            <b>Together</b>, it's magic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
