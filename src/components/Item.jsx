import React from 'react'

const Item = ({task, onRemove, id}) => {


    return (
        <div className={"list-group-item d-flex w-50  justify-content-between align-items-center mb-2 bg-info"}>
            <p>{task}</p>
            <button type="submit" className="btn btn-danger" onClick={() => onRemove(id)}>Delete task</button>
        </div>
    )

}

export default Item
