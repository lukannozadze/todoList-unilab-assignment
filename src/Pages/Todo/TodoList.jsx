import React from "react";
import ListItem from "./ListItem";

const TodoList = (props) => {
  const passDeletedId = (id) => {
    props.onDeleteTodo(id);
  };
  return (
    <ul>
      {props.data.map((item) => {
        return (
          <ListItem key={item.id} data={item} onDeleteTodo={passDeletedId} />
        );
      })}
    </ul>
  );
};

export default TodoList;
