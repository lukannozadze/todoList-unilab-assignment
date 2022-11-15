import React from "react";
import ListItem from "./ListItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.data.map((item) => {
        return <ListItem key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default TodoList;
