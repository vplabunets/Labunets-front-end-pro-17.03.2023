import React, {Component} from 'react'

class ListGroup extends Component {

    render() {
        return <ul className="list-group">
            {this.props.listData.map(element => {
                const {id, text} = element
                return <li key={id} className="list-group-item">{text}</li>
            })
            }
        </ul>
    }
}

export default ListGroup