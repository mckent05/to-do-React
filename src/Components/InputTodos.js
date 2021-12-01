/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class InputTodos extends Component {
  render() {
    const { add, newTask } = this.props;
    return (
      <div className="form">
        <input onChange={add} type="text" placeholder="add your task" />
        <button type="button" onClick={newTask}>Submit</button>
      </div>
    );
  }
}

export default InputTodos;
