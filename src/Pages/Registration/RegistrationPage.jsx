import Card from "./Card";
import UploadArea from "./UploadArea";
import NameInput from "./NameInput";
import SignInBtn from "./SignInBtn";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.length === 3) {
      navigate("/todo");
    }
  }, []);
  return (
    <div className="w-screen h-screen bg-[#000000] flex justify-center items-center">
      <Card>
        <h1 className="text-[36px] font-bold mt-[73px] sm:text-[40px] lg:text-[44px]">
          Get Started
        </h1>
        <UploadArea />
        <NameInput />
        <SignInBtn />
      </Card>
    </div>
  );
};

export default RegistrationPage;
