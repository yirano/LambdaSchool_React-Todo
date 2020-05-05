import React, { Component } from 'react'
import Todo from './Todo'

export class TodoList extends Component {
  render(props) {
    const { todo, complete, handleComplete } = this.props;
    return (
      <div className="todoListContainer">
        {todo.map(task => (
          <>
            {console.log(task.className)}
            <Todo
              className={task.complete ? "todoCard completed" : "todoCard"}
              id={task.id}
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
