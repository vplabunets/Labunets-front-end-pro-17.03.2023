import React, {Component} from 'react'
import Item from "./Item";

export class TodoBox extends Component {
    render() {
        const {tasks, onRemove} = this.props
        return (<div className="list-group mt-2">
            {tasks.map(({id, task}) => <Item key={id} task={task} id={id} onRemove={onRemove}/>)}
        </div>)
    }
}

export default TodoBox
