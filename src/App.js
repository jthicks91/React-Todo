import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDoData: [
        {
          task: "Clean Room",
          id: Date.now(),
          completed: false
        },
        {
          task: "Practice JavaScript",
          id: Date.now(),
          completed: false
        },
        {
          task: "Practice React",
          id: Date.now(),
          completed: false
        },
        {
          task: "Find The Meaning of Life",
          id: Date.now(),
          completed: false
        },
        {
          task: "Graduate Lambda School",
          id: Date.now(),
          completed: false
        }
      ],
      todo: ""
    };
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addToDoHandler = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now()
    };
    this.setState({
      toDoData: [...this.state.toDoData, newTodo],
      todo: ""
    });
  };

  render() {
    return (
      <div>
        <h1>My First React To-do List!</h1>
        <TodoList toDoData={this.state.toDoData} />
        <TodoForm
          value={this.state.todo}
          changeHandler={this.changeHandler}
          addToDoHandler={this.addToDoHandler}
        />
      </div>
    );
  }
}

export default App;
