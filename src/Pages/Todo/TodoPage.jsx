import React, { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const TodoPage = (props) => {
  const [listArr, setListArr] = useState([]);
  const getItemData = (data) => {
    setListArr((prevState) => [...prevState, data]);
  };

  return (
    <div className="w-screen h-screen font-poppins flex flex-col items-center">
      <Header />
      <TodoInput onGetItemData={getItemData} />
      <TodoList data={listArr} />
    </div>
  );
};

export default TodoPage;
