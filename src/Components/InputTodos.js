/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodos extends Component {
  render() {
    const { add, newTask } = this.props;
    return (
      <div className="form">
        <input onChange={add} type="text" id="enter-task" placeholder="add your task" />
        <button className="d-flex j-center a-center" type="button" aria-label="add" onClick={newTask}><FaPlusCircle /></button>
      </div>
    );
  }
}

export default InputTodos;
