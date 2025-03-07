import React from 'react';

class Todo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "Hello"
        };
        this.removeTodo = this.removeTodo.bind(this);
        console.log(`Todo Component ${this.props.id} constructor called`)
    }

    componentDidMount = () => {
        console.log(`Todo component ${this.props.id} mounted ->`);
    };

    componentDidUpdate() {
        console.log(
            `Todo Component ${this.props.id} updated with new name: ` + this.todo.name
        );
    }

    componentWillUnmount() {
        console.log(
            `Todo component ${this.props.id} about to unmount with name: ` + this.state.name
        )
    }

    removeTodo() {
        const lastChar = this.state.name[this.state.name.length - 1];
        if (lastChar === "!") {
            this.setState({
                name: this.state.name.slice(0, -1)
            });
        }
    }

    render() {
        console.log(`component ${this.props.id} render called, Todo`);
        return (
            <p>
                {this.state.name}
                <button onClick={this.removeTodo}>Remove '!'</button>
            </p>
        );
    }
}

export default Todo;