import { Component } from 'react'
import ToDo from './Todo'

class ToDoList extends Component {
    state = {
        input: '',
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }

    handleAdd = () => {
        if (!this.state.input) return

        this.setState({ tasks: [...this.state.tasks, { taskName: this.state.input, completed: false }] })
    }

    handleRemove = (index) => {
        const tasks = [...this.state.tasks]

        tasks.splice(index, 1)

        this.setState({ tasks })
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    handleToggle = (index) => {
        const tasks = [...this.state.tasks]

        tasks[index].completed = !tasks[index].completed

        this.setState({ tasks })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.tasks !== prevState.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>add</button>

                <ul>
                    {this.state.tasks.map((task, index) => {
                        return (
                            <ToDo 
                                key={index}
                                index={index}
                                task={task}
                                handleToggle={this.handleToggle}
                                handleRemove={this.handleRemove}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoList