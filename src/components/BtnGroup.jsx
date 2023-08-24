import React, {Component} from 'react'
import classNames from "classnames";

class BtnGroup extends Component {
    state = {
        buttonClass: "btn btn-primary"
    }
    onClickHandler = () => {
        this.setState(
            {
                buttonClass: classNames("btn btn-primary", {
                    "active": this.props.buttonText === "left"

                }, {
                    "active": this.props.buttonText === "right"
                })
            }
        )
    }

    render() {
        const {buttonsData} = this.props
        return (
            <div className="btn-group" role="group">
                {buttonsData.map(element => {
                    const {id, buttonText} = element
                    return <button type="button" className={this.state.buttonClass} key={id}
                                   onClick={this.onClickHandler}>{buttonText.toUpperCase()}
                    </button>
                })
                }
            </div>
        )

    }
}

export default BtnGroup
