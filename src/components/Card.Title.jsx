import React, {Component} from 'react'

export class CardTitle extends Component {
    render() {
        return (
            <h4 className="card-title">{this.props.children}</h4>
        )
    }
}

export default CardTitle
