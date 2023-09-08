import React, {useState} from 'react'
import TodoBox from "./TodoBox";

const Layout = () => {
    const [currentTask, setCurrentTask] = useState("")
    const [tasks, setTasks] = useState([])


    const uniqueId = () => {
        return `_${Math.random() * (99999 - 1) + 1}_${Date.now()}`
    }
    const handleChange = event => {
        setCurrentTask(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        setTasks([{id: uniqueId(), task: currentTask}, ...tasks])
        setCurrentTask("")
    }

    const onRemove = (item) => {
        setTasks(tasks.filter(task => task.id !== item))

    }


    return <div className="mb-3">
        <form className="d-flex">
            <div className="me-3">
                <input type="text"
                       className="form-control"
                       value={currentTask}
                       name="currentTask"
                       placeholder="I am going..."
                       onChange={handleChange}
                       required=""
                />
            </div>
            {<button type="submit"
                     className="btn btn-primary"
                     onClick={handleSubmit}
                     disabled={!Boolean(currentTask)}>add
            </button>}
        </form>
        <TodoBox tasks={tasks} onRemove={onRemove}/>
    </div>


}

export default Layout