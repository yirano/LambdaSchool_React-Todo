import React from "react";
import { Input, Button } from "@material-ui/core";

const TodoForm = props => {
  console.log(props);
  return (
    <div className="todoForm" onClick={props.handleComplete}>
      <form onSubmit={props.handleSubmit}>
        <Input
          id="input"
          type="text"
          name="task"
          placeholder="What is your task?"
          value={props.input}
          onChange={e => props.handleChange(e)}
        />
        <Button
          type="submit"
          disabled={!props.input}
        >Submit</Button >
      </form>
      <Button onClick={props.handleClear}>Clear Completed</Button>
    </div>
  );
};

export default TodoForm;
