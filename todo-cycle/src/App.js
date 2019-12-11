import React from 'react';
// import ReactDOM from 'react-dom';
import TodoList from './Components/todolist'
import TodoForm from './Components/todoForm'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      todoName: '',
      todoItems: [],
      todoNumber: 1

    }
    this.state = this.initialState
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { todoName, todoItems } = this.state

    const newTodoItemsCopy = [...todoItems];

    newTodoItemsCopy.push({
      todoName: todoName
    })

    this.setState({
      todoItems: newTodoItemsCopy
    })
  }

  handleName = (e) => {
    this.setState({
      todoName: e.target.value
    })
  }

  render() {
    const { todoName, todoNumber } = this.state
    return (
      <div className="App">
        <TodoList
          todoName={todoName}
          todoNumber={todoNumber} />

        <TodoForm
          todoName={todoName}
          todoNumber={todoNumber}
          handleName={this.handleName}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }

}


export default App;

//We want the App state to hold the name and information of the todo itself
//the todo.js will keep its lifecycle methods and be called by the todolist
