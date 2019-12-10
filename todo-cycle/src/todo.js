import React from 'react';

class Todo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello"
        };
        this.removeTodo = this.removeTodo.bind(this);
        console.log(`Todo Component ${this.props.id} constructor called`)
    }

    componentDidMount = () => {
        console.log(`Todo component ${this.props.id} mounted ->`);
    };

    componentDidUpdate() {
        console.log(
            `Todo Component ${this.props.id} updated with new message: ` + this.todo.message
        );
    }

    componentWillUnmount() {
        console.log(
            `Todo component ${this.props.id} about to unmount with message: ` + this.state.message
        )
    }

    removeTodo() {
        const lastChar = this.state.message[this.state.message.length - 1];
        if (lastChar === "!") {
            this.setState({
                message: this.state.message.slice(0, -1)
            });
        }
    }

    render() {
        console.log(`component ${this.props.id} render called, Todo`);
        return (
            <p>
                {this.state.message}
                {/* <button onClick={this.addBang}>Add '!'</button> */}
                <button onClick={this.removeTodo}>Remove '!'</button>
            </p>
        );
    }
}

export default Todo;