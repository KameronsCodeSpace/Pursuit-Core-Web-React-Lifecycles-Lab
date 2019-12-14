import React from 'react';

const TodoForm = (props) => {

    return (
        <div>
            <p>Enter Your Todo's here</p>
            <form onSubmit={props.handleSubmit}>
                <label>Todo: </label>
                <input
                    id='name'
                    name='name'
                    type='text'
                    onChange={props.handleName}
                    value={props.todoName}
                />
                <button>Add</button>
<<<<<<< HEAD
=======

>>>>>>> 48e02192062216828248ea6df61a0fd0a30cb289
            </form>
            {console.log('Props from App.js', props)}
        </div>
    )
}

export default TodoForm;