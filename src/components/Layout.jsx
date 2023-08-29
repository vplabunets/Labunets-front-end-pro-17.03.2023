import React, {Component} from 'react'
import TodoBox from "./TodoBox";

class Layout extends Component {
    state = {
        currentTask: "",
        tasks: [],
    }

    uniqueId = () => {
        return `_${Math.random() * (99999 - 1) + 1}_${Date.now()}`
    }
    handleChange = event => {
        this.setState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    };
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                ...prevState, tasks: [{id: this.uniqueId(), task: this.state.currentTask}, ...prevState.tasks]

            }
        })
    }

    onRemove = (item) => {
        this.setState(prevState => {
            return {
                ...prevState, tasks: prevState.tasks.filter(task => task.id !== item)

            }
        })
    }

    render() {
        return <div className="mb-3">
            <form className="d-flex">
                <div className="me-3">
                    <input type="text"
                           className="form-control"
                           value={this.state.currentTask}
                           name="currentTask"
                           placeholder="I am going..."
                           onChange={this.handleChange}
                           required=""
                    />
                </div>
                {<button type="submit"
                         className="btn btn-primary"
                         onClick={this.handleSubmit}
                         disabled={!Boolean(this.state.currentTask)}>add
                </button>}
            </form>
            <TodoBox tasks={this.state.tasks} onRemove={this.onRemove}/>
        </div>


    }
}

export default Layout