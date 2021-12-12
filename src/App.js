/* eslint-disable consistent-return */
import './App.css';
import './Components/todo.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaBars } from 'react-icons/fa';
import TodoLists from './Components/TodoLists';
import Header from './Components/Header';
import InputTodos from './Components/InputTodos';
import Navbar from './Components/Navbar';
import About from './Pages/About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        // {
        //   id: uuidv4(),
        //   title: 'Setup development environment',
        //   completed: false,
        // },
        // {
        //   id: uuidv4(),
        //   title: 'Develop website and add content',
        //   completed: false,
        // },
        // {
        //   id: uuidv4(),
        //   title: 'Deploy to live server',
        //   completed: false,
        // },
      ],
      newTask: {
        title: '',
      },
      setNav: false,
    };
  }

  handleChange =(id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  deletetask = (id) => {
    this.setState((previousState) => ({
      todos: previousState.todos.filter((todo) => todo.id !== id),
    }));
  }

  addToDo = (e) => {
    const title = e.target.value;
    const id = uuidv4();
    const completed = false;
    this.setState((prevState) => ({
      newTask: {
        ...prevState.newTask, title, id, completed,
      },
    }));
  }

  addnewTask = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const { title } = prevState.newTask;
      if (title !== '') {
        return {
          todos: [...prevState.todos, prevState.newTask],
        };
      }
      if (title === '' || prevState.newTask === {}) {
        return {
          todos: prevState.todos,
        };
      }
    });
    this.setState(() => ({ newTask: { title: '' } }));
    document.querySelector('#enter-task').value = '';
  }

  handleEdit = (id, e) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: e.target.value };
        }
        return todo;
      }),
    }));
  }

  handleNavbar = () => {
    this.setState((prevState) => ({ setNav: !prevState.setNav }));
  }

  closeNavbar = () => {
    this.setState((prevState) => ({ setNav: !prevState.setNav }));
  }

  clearCompleted = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.completed === false),
    }));
  }

  render() {
    const { todos, setNav } = this.state;
    return (
      <>
        <button className="menu" type="button" onClick={this.handleNavbar}>
          <FaBars />
        </button>
        <Navbar Nav={setNav} close={this.closeNavbar} />
        <Routes>
          <Route
            path="/"
            element={(
              <div className="app d-flex f-col a-center j-center">
                {' '}
                <Header />
                <InputTodos add={this.addToDo} newTask={this.addnewTask} />
                <TodoLists
                  todos={todos}
                  change={this.handleChange}
                  deleted={this.deletetask}
                  editToDo={this.handleEdit}
                />
                <button type="button" className={todos.length === 0 ? 'hide-btn clr-btn' : 'clr-btn'} onClick={this.clearCompleted}> Clear all Completed </button>
              </div>
)}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    );
  }
}

export default App;
