import React from "react";
import landingImgPath from "../../assets/landing-image.png";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.length === 3) {
      navigate("/todo");
    }
  }, []);
  return (
    <div className="w-screen h-screen bg-[#000000] flex flex-col items-center gap-[76px] ">
      <div className="mt-[104px]">
        <img
          className="w-[90px] h-[165px]"
          src={landingImgPath}
          alt="screen icon with green correction mark"
        />
      </div>
      <h1 className="text-[36px] text-center text-[#ffffff] font-poppins sm:text-[40px] lg:text-[48px] def:text-[54px] leading-[81px]">
        Keep Track Of Daily Tasks In Life
      </h1>
      <button
        className="bg-[#5efc8d] w-[190px] font-poppins text-[22px] mt-[40px] mb-[20px] pt-[15px] pb-[15px] rounded-[4px] hover:bg-[#ffffff] 
      sm:text-[26px] sm:w-[210px] sm:mt-[70px] lg:text-[30px] lg:w-[240px] lg:mt-[80px] def:text-[48px] def:w-[388px] def:leading-[72px] def:mt-[149px] "
      >
        <Link to="/registration">Get Started</Link>
      </button>
    </div>
  );
};

export default WelcomePage;
