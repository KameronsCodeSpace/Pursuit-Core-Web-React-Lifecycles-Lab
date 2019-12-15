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

  // Use key to delete seperate ones? Nope it just works with a simple remove of the child
  removeTodo = () => {
    console.log('Remove')
    let element = document.getElementById('elementId');
    element.parentNode.removeChild(element);

  }


  render() {
    const { todoName, todoItems } = this.state
    return (
      <div className="App">
        <TodoForm
          todoName={todoName}
          todoItems={todoItems}
          handleName={this.handleName}
          handleSubmit={this.handleSubmit}
        />

        <TodoList
          key={todoName}
          todoName={todoName}
          todoItems={todoItems}
          removeTodo={this.removeTodo}
        />

      </div>
    );
  }

}


export default App;

//We want the App state to hold the name and information of the todo itself
//the todo.js will keep its lifecycle methods and be called by the todolist
