import React, {Component} from 'react'

class ListGroup extends Component {

    render() {
        const {listData} = this.props;
        return <ul className="list-group">
            {listData.map(element => {
                const {id, text} = element
                return <li key={id} className="list-group-item">{text}</li>
            })
            }
        </ul>
    }
}

export default ListGroup