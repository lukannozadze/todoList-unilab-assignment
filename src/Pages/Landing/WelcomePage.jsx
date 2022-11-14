import React from "react";
import landingImgPath from "../../assets/landing-image.png";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="w-screen h-screen bg-[#000000] flex flex-col items-center gap-[76px] ">
      <div className="mt-[104px]">
        <img
          className="w-[90px] h-[165px]"
          src={landingImgPath}
          alt="screen icon with green correction mark"
        />
      </div>
      <h1 className="text-[36px] text-center text-[#ffffff] font-poppins">
        Keep Track Of Daily Tasks In Life
      </h1>
      <button className="bg-[#5efc8d] w-[190px] font-poppins text-[22px] mt-[40px] mb-[20px] pt-[15px] pb-[15px] rounded-[4px] hover:bg-[#ffffff]">
        <Link to="/registration">Get Started</Link>
      </button>
    </div>
  );
};

export default WelcomePage;
