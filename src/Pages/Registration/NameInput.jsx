const nameInput = () => {
  const nameInputChangeHandler = (e) => {
    localStorage.setItem("userName", e.target.value);
  };
  return (
    <form className="flex flex-col items-center ">
      <label
        className="sm:text-[18px] lg:text-[20px] def:text-[22px]"
        htmlFor="name"
      >
        fill in your name
      </label>
      <input
        className="bg-[#e6ebff] w-[250px] pt-[10px] pb-[10px] pl-[15px] rounded-[4px] mt-[16px] mb-[97px] outline-none sm:w-[340px] sm:pb-[15px] sm:pt-[15px]
         lg:w-[390px] lg:pt-[20px] lg:pb-[20px] def:w-[487px] def:pt-[23px] def:pb-[23px] text-[22px] def:mb-[40px] "
        type="text"
        name="name"
        onChange={nameInputChangeHandler}
        placeholder="your name"
      ></input>
    </form>
  );
};

export default nameInput;
