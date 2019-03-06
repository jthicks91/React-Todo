import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={this.addToHandler}>
        <input
          type="text"
          name="newTask"
          value={props.newTask}
          onChange={props.changeHandler}
          placeholder="...To do"
        />
        <button onClick={props.addNewToDo}>New Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
