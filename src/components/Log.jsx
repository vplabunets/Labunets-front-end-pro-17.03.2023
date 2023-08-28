import React, {Component} from 'react'

export class Log extends Component {
    render() {
        return (<div className="list-group">
            {this.props.children}
        </div>)
    }
}

export default Log
