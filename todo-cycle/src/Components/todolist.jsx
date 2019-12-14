import React from 'react';
// import Todo from './Components/todo';

// const TodoList = (props) => {

//     const todosList = props.
// }

const TodoList = (props) => {
    console.log("todo items", props.todoItems)
    const todoItems = () => {
        return props.todoItems.map((el) => {
            return (
                <p>{el.todoName} <button onClick={props.removeTodo}>Remove</button></p> 
            )
        })
    }
    return (
        <div>
            {todoItems()}
            {console.log('This Name', props.todoName)}
        </div>
    )
}

// class TodoList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             todoNumber: 1
//         };
//         console.log("GreetingContrainer constructor");
//     }


//     renderTodo() {
//         const { todoNumber } = this.state;
//         let todoComponents = [];

//         for (let i = 0; i < todoNumber; i++) {
//             todoComponents.push(
//                 <Todo key={i} id={String.fromCharCode(i + 65)} />
//             );
//         }
//         return todoComponents;
//     }

//     componentDidMount() {
//         console.log("TodoList mounted");
//     }

//     componentDidUpdate() {
//         console.log(
//             "TodoList updated: Now with " +
//             this.state.todoNumber +
//             " Todos"
//         );
//     }

//     addTodo = () => {
//         this.setState({
//             todoNumber: this.state.todoNumber + 1
//         });
//     };

//     removeTodo = () => {
//         this.setState({
//             todoNumber: Math.max(0, this.state.todoNumber - 1)
//         });
//     };

//     render() {
//         console.log("TodoList render");
//         return (
//             <div>
//                 {this.renderTodo()}
//                 <div>
//                     <button onClick={this.addTodo}>+</button>
//                     <button onClick={this.removeTodo}>-</button>
//                 </div>
//             </div>
//         );
//     }
// }


export default TodoList;