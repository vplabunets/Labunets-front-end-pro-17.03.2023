import React, {Component} from 'react'

export class CardBody extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="card-body">{this.props.children}</div>
        )
    }
}

export default CardBody
