import React from "react";
import ListItem from "./ListItem";

const TodoList = (props) => {
  const passDeletedId = (id) => {
    props.onDeleteTodo(id);
  };
  const passCompletedId = (id) => {
    props.onDoneTodo(id);
  };
  return (
    <ul>
      {props.data.map((item) => {
        return (
          <ListItem
            key={item.id}
            data={item}
            onDeleteTodo={passDeletedId}
            onDoneTodo={passCompletedId}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
