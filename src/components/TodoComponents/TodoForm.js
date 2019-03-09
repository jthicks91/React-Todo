import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addToDoHandler}>
        <input
          type="text"
          name="todo"
          value={props.value}
          onChange={props.changeHandler}
          placeholder="...To do"
        />
        <button type="submit">New Todo</button>
        <button onClick={props.handleclearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
