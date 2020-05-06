import React, { Component } from 'react'

export class Todo extends Component {
  render() {
    const { id, className, handleComplete, todo } = this.props;
    return (
      <div id={id} className={className}>
        <h3 id={id} onClick={e => handleComplete(e)}>
          {todo.input}
        </h3>
      </div>
    );
  }
}

export default Todo
