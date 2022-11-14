const nameInput = () => {
  const nameInputChangeHandler = (e) => {
    localStorage.setItem("userName", e.target.value);
  };
  return (
    <form className="flex flex-col items-center ">
      <label htmlFor="name">fill in your name</label>
      <input
        className="bg-[#e6ebff] w-[250px] pt-[10px] pb-[10px] pl-[15px] rounded-[4px] mt-[16px] mb-[97px] outline-none"
        type="text"
        name="name"
        onChange={nameInputChangeHandler}
        placeholder="your name"
      ></input>
    </form>
  );
};

export default nameInput;
