import React, {Component} from 'react'

export class CardText extends Component {
    render() {
        return (
            <p className="card-text">{this.props.children}</p>

        )
    }
}

export default CardText
