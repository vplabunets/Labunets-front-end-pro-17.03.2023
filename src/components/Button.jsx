import React, {Component} from 'react'

class Button extends Component {

    render() {
        const {type, text, onClickHandler} = this.props
        return (<button className={type === "prev" ? "carousel-control-prev" : "carousel-control-next"} type="button"
                        onClick={onClickHandler}>
            <span className={type === "prev" ? "carousel-control-prev-icon" : "carousel-control-next-icon"}
                  aria-hidden="true"></span>
            <span className="visually-hidden">{text}</span>
        </button>)
    }
}


export default Button
