/* eslint-disable react/prop-types */
import './todo.css';
import React, { Component } from 'react';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
    };
  }

    handleEdit = () => {
      this.setState((prevState) => ({
        edit: !prevState.edit,
      }));
    }

      finishUpdate = (e) => {
        if (e.key === 'Enter') {
          this.setState({ edit: false });
        }
      }

      render() {
        const {
          change, editToDo, deleteToDo, todo: { completed, title, id },
        } = this.props;
        const { edit } = this.state;
        return (
          <div className="list-container">
            <li onDoubleClick={this.handleEdit} className={completed ? 'completed task d-flex a-center' : 'task d-flex a-center'}>
              {' '}
              <input className="checkbox" type="checkbox" checked={completed} onChange={() => change(id)} />
              {' '}
              <div className={edit ? 'edit' : null}>
                {' '}
                <input className="edit-text" value={title} onChange={(event) => editToDo(id, event)} onKeyDown={(event) => this.finishUpdate(event)} type="text" />
                <p>{title}</p>
              </div>
              {' '}
              <button type="button" onClick={() => deleteToDo(id)}>Delete</button>
            </li>
          </div>
        );
      }
}

export default TodoItem;
