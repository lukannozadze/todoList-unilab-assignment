import React, { useNavigate } from "react-router-dom";

const SignInBtn = () => {
  let navigate = useNavigate();
  const signInBtnHandler = () => {
    if (localStorage.length === 2) {
      console.log("correct");
      navigate("/todo");
    } else {
      navigate("");
    }
  };

  return (
    <button
      onClick={signInBtnHandler}
      className="w-[200px] bg-[#5efc8d] text-[26px] rounded-[4px] pt-[5px] pb-[5px] hover:bg-[#000000] hover:text-[#ffffff] mb-[45px]
       sm:text-[28px] sm:w-[220px] lg:w-[250px] lg:pt-[10px] lg:pb-[10px] lg:text-[30px] def:text-[32px] def:w-[258px] def:mb-[20px]"
    >
      Sign In
    </button>
  );
};

export default SignInBtn;
