/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './todo.css';

class TodoLists extends Component {
  render() {
    const {
      todos, change, deleted, editToDo,
    } = this.props;
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              change={change}
              deleteToDo={deleted}
              editToDo={editToDo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoLists;
