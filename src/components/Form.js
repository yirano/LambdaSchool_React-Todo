import React, { Component } from 'react'
import { Input, Button } from "@material-ui/core";

export class TodoForm extends Component {
  render() {
    return (
      <div className="todoForm" onClick={this.props.handleComplete} style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={this.props.handleSubmit}>
          <Input
            id="input"
            type="text"
            name="input"
            placeholder="What is your task?"
            value={this.props.input}
            onChange={e => this.props.handleChange(e)}
          />
          <Button
            type="submit"
            disabled={!this.props.input.trim()}
          >Submit</Button >
          <Button onClick={this.props.handleClear}>Clear Completed</Button>
        </form>
        <form onSubmit={this.props.handleSubmit}>
          <Input
            id=""
            type="text"
            name="search"
            placeholder="Search for a task"
            value={this.props.search}
            onChange={e => this.props.handleChange(e)}
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
    );
  }
}

export default TodoForm

