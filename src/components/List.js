import React, { Component } from 'react'

import Draggable, { DraggableCore } from 'react-draggable'

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
            <Draggable
              axis="x"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}>
              <Todo
                className={task.complete ? "todoCard completed" : "todoCard"}
                id={task.id}
                key={task.id}
                todo={task}
                complete={complete}
                handleComplete={handleComplete}
              />
            </Draggable>
          </>
        ))}
      </div>
    );
  }
}

export default TodoList;
