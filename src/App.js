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
      inputText: "",
      newTask: ""
    };
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addToDoHandler = event => {
    event.preventDefault();
    this.setState({
      toDoData: [...this.state.toDoData, { task: this.state.newTask }],
      newTask: ""
    });
  };

  render() {
    return (
      <div>
        <TodoList newTask={this.state.newTask} toDoData={this.state.toDoData} />
        <TodoForm
          addToDoHandler={this.addToDoHandler}
          inputText={this.state.inputText}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
