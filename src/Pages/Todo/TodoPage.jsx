import React, { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const TodoPage = () => {
  const [listArr, setListArr] = useState([]);
  const copyListArr = listArr.slice();
  const getItemData = (data) => {
    setListArr((prevState) => [...prevState, data]);
  };
  const deleteTodo = (id) => {
    setListArr(
      copyListArr.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div className="w-screen h-screen font-poppins flex flex-col items-center">
      <Header />
      <TodoInput onGetItemData={getItemData} />
      <TodoList data={listArr} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPage;
