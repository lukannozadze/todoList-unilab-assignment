const Header = () => {
  return (
    <header className="w-[100%] bg-[#000000] font-poppins text-[#ffffff] flex justify-between items-center pt-[10px] pb-[10px] lg:pt-[15px] lg:pb-[15px] def:pt-[24px] def:pb-[24px]">
      <h1 className="text-[32px] font-bold pl-[10px] lg:text-[34px] def:text-[36px] def:leading-[55px]">
        TO DO
      </h1>
      <div className="flex items-center gap-[10px] pr-[10px]">
        <span className="lg:text-[20px] def:text-[22px]">
          {localStorage.getItem("userName")}
        </span>
        <div className="bg-[#e6ebff] rounded-[50%] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] def:w-[68px] def:h-[68px] ">
          <img
            className="w-[100%] h-[100%] rounded-[50%]"
            src={localStorage.getItem("imgPath")}
            alt="user img"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
