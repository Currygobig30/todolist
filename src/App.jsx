import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import {v4 as uuid} from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Wash the dishes',
        completed: false
      },
      {
        id: uuid(),
        title: 'Feed the dog',
        completed: false
      },
      {
        id: uuid(),
        title: 'Pick up Jessie from Airport',
        completed: false
      },
      {
        id: uuid(),
        title: 'Video chat with boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    // spread operator "..."
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
