const nameInput = () => {
  return (
    <form className="flex flex-col items-center ">
      <label htmlFor="name">fill in your name</label>
      <input
        className="bg-[#e6ebff] w-[250px] pt-[10px] pb-[10px] pl-[15px] rounded-[4px] mt-[16px] mb-[97px] outline-none"
        type="text"
        name="name"
        placeholder="your name"
      ></input>
    </form>
  );
};

export default nameInput;
