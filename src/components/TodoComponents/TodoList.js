import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.toDoData.map(todo => (
        <Todo
          handletoggleTodoDone={props.handletoggleTodoDone}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
