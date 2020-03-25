import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./css/index.css";

class App extends Component {
  todoData;
  constructor() {
    super();
    this.state = {
      todo: this.todoData || [],
      complete: false,
      input: "",
      className: "todoCard"
    };
  }

  // submits the task and renders to list
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prev => {
      return {
        todo: [
          ...prev.todo,
          {
            input: this.state.input,
            complete: false,
            id: Date.now(),
            className: "todoCard"
          }
        ],
        input: ""
      }
    });
  };

  // keeps track of change happening in input
  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  // clear lists with a true bool
  handleClear = () => {
    this.setState(prev => {
      return {
        todo: prev.todo.filter(filter => {
          return filter.complete === false;
        })
      }
    });
  };

  // handles event when task is clicked
  handleComplete = e => {
    this.state.todo.map(list => {
      return (list.complete =
        Number(list.id) === Number(e.target.id)
          ? !list.complete
          : list.complete);
    });

    const completedClass = this.state.todo.map(list => {
      return (list.className =
        list.complete === true ? "todoCard completed" : "todoCard");
    });
    return this.setState({ className: completedClass });
  };

  componentDidMount() {
    this.todoData = JSON.parse(localStorage.getItem("todo"));
    if (localStorage.getItem("todo")) {
      this.setState({
        todo: [...this.todoData.todo]
      });
    } else {
      console.log("nothing");
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todo", JSON.stringify(nextState));
  }

  render() {
    const { todo, input, complete } = this.state;
    const { handleClear, handleComplete } = this;
    return (
      <div className="container">
        <TodoForm
          input={input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClear={handleClear}
        />
        <TodoList
          todo={todo}
          complete={complete}
          handleComplete={handleComplete}
        />
      </div>
    );
  }
}

export default App;
