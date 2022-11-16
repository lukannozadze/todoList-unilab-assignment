import React, { useState } from "react";
const TodoInput = (props) => {
  const [currentItem, setCurrentItem] = useState("");
  const addBtnClickHandler = (e) => {
    if (currentItem === "") {
      e.preventDefault();
    } else {
      e.preventDefault();
      props.onGetItemData(data);
      setCurrentItem("");
    }
  };
  const todoInputChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  let data = {
    listItem: currentItem,
    id: Math.random().toString(),
    active: true,
  };

  return (
    <form className="flex flex-col items-center mt-[34px]">
      <label
        className="font-bold text-[26px] leading-[33px] mb-[27px] sm:text-[30px] lg:text-[38px] def:text-[42px] def:leading-[63px]"
        htmlFor="todo"
      >
        Add Your Daily Tasks
      </label>
      <div className="mb-[51px]">
        <input
          className="w-[300px] pt-[15px] pb-[15px] bg-[#e6ebff] rounded-[4px] pl-[13px] outline-none sm:w-[340px] lg:w-[430px] lg:text-[20px] def:w-[487px] def:text-[20px] def:pt-[20px] def:pb-[23px]"
          type="text"
          onChange={todoInputChangeHandler}
          name="todo"
          value={currentItem}
          placeholder="my task"
        ></input>
        <button
          onClick={addBtnClickHandler}
          className="bg-[#5efc8d] pt-[15px] pb-[15px] pl-[8px] pr-[8px] rounded-[4px] lg:text-[20px] lg:pl-[10px] lg:pr-[10px] def:text-[22px] def:pt-[18px] def:pb-[21px]
           def:w-[108px]"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
