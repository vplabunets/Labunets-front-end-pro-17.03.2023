import React from 'react'
import Item from "./Item";

const TodoBox = ({tasks, onRemove}) => {
    return (<div className="list-group mt-2">
        {tasks.map(({id, task}) => <Item key={id} task={task} id={id} onRemove={onRemove}/>)}
    </div>)

}

export default TodoBox
