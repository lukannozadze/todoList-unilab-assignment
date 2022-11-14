const Header = () => {
  return (
    <header className="w-[100%] bg-[#000000] font-poppins text-[#ffffff] flex justify-between items-center pt-[10px] pb-[10px]">
      <h1 className="text-[32px] font-bold pl-[10px]">TO DO</h1>
      <div className="flex items-center gap-[10px] pr-[10px]">
        <span>{localStorage.getItem("userName")}</span>
        <div className="bg-[#e6ebff] rounded-[50%] w-[40px] h-[40px] ">
          <img
            className="w-[100%] h-[100%] rounded-[50%]"
            src={localStorage.getItem("imgPath")}
            alt="user photo"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
