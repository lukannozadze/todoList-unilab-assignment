import React, { useState, useEffect } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";
const TodoPage = () => {
  const [listArr, setListArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("todoListArr") !== null) {
      setListArr(JSON.parse(localStorage.getItem("todoListArr")));
    }
  }, []);

  useEffect(() => {
    if (localStorage.length === 0) {
      navigate("/");
    }
  }, []);

  const copyListArr = listArr.slice();

  const getItemData = (data) => {
    setListArr((prevState) => [...prevState, data]);
    localStorage.setItem("todoListArr", JSON.stringify([...listArr, data]));
  };

  const deleteTodo = (id) => {
    setListArr(
      copyListArr.filter((item) => {
        return item.id !== id;
      })
    );
    localStorage.setItem(
      "todoListArr",
      JSON.stringify(
        copyListArr.filter((item) => {
          return item.id !== id;
        })
      )
    );
  };
  const doneTodo = (id) => {
    const changedArr = copyListArr.map((item) => {
      if (item.id === id) {
        item.active = false;
      }
      return item;
    });
    setListArr(changedArr);
    localStorage.setItem("todoListArr", JSON.stringify(changedArr));
  };
  return (
    <div className="w-screen h-screen font-poppins flex flex-col items-center">
      <Header />
      <TodoInput onGetItemData={getItemData} />
      <TodoList
        data={listArr}
        onDeleteTodo={deleteTodo}
        onDoneTodo={doneTodo}
      />
    </div>
  );
};

export default TodoPage;
