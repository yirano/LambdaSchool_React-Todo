import React, { Component } from 'react'
import Todo from './Card'

export class TodoList extends Component {
  render() {
    const { todo, complete, handleComplete, search } = this.props;
    console.log("TodoList -> render -> todo", todo)

    const value = todo.filter(t => t.input.toLowerCase().includes(search.toLowerCase().trim()))

    return (
      <div className="todoListContainer">
        {value.map(task => (
          <>
            <Todo
              className={task.complete ? "todoCard completed" : "todoCard"}
              id={task.id}
              key={task.id}
              todo={task}
              complete={complete}
              handleComplete={handleComplete}
            />
          </>
        ))}
      </div>
    );
  }
}

export default TodoList;
