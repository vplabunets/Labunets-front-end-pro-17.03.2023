import React, {Component} from 'react'

class Card extends Component {
    static Body = ({children}) => {
        return (
            <div className="card-body">
                {children}
            </div>
        );
    }

    static Title = ({children}) => {
        return (
            <h3 className="card-title">
                {children}
            </h3>
        );
    }

    static Text = ({children}) => {
        return (
            <h3 className="text">
                {children}
            </h3>
        );
    }

    render() {


        return <div className="card w-25">
            {this.props.children}
        </div>
    }
}

export default Card