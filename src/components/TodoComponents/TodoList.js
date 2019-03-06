import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.toDoData.map(newTask => (
        <Todo newTask={newTask} />
      ))}
    </div>
  );
};

export default TodoList;
