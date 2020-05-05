import React, { Component } from 'react'
import { Input, Button } from "@material-ui/core";

export class TodoForm extends Component {
  render() {
    return (
      <div className="todoForm" onClick={this.props.handleComplete}>
        <form onSubmit={this.props.handleSubmit}>
          <Input
            id="input"
            type="text"
            name="task"
            placeholder="What is your task?"
            value={this.props.input}
            onChange={e => this.props.handleChange(e)}
          />
          <Button
            type="submit"
            disabled={!this.props.input.trim()}
          >Submit</Button >
        </form>
        <Button onClick={this.props.handleClear}>Clear Completed</Button>
      </div>
    );
  }
}

export default TodoForm

