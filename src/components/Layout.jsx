import React, {Component} from 'react'
import Log from "./Log";

class Layout extends Component {
    state = {step: this.props.step, startNumber: this.props.startNumber, currentResult: 0, log: []}


    handleIncrement = async (event) => {
        await this.setState(prevState => {
            return {...prevState, currentResult: prevState.currentResult + 1}
        })
        this.addLogValue(this.state.currentResult)
    }


    handleDecrement = async (event) => {
        await this.setState(prevState => {
            return {...prevState, currentResult: prevState.currentResult - 1}
        })
        this.addLogValue(this.state.currentResult)

    }

    addLogValue = (value) => {
        this.setState(prevState => {
            return {...prevState, log: [value, ...prevState.log]}
        })
    }

    deleteLogValue = (value) => {
        this.setState(prevState => {
            return {...prevState, log: prevState.log.filter(element => element !== value)}
        })
    }

    render() {
        return <>
            <div className="btn-group font-monospace" role="group">
                <button type="button" className="btn btn-outline-success" onClick={this.handleIncrement}>+</button>
                <button type="button" className="btn btn-outline-danger" onClick={this.handleDecrement}>-</button>
            </div>
            <Log>
                {this.state.log.length > 0 &&
                    <div>{this.state.log.map((element, index) => <button key={index} type="button"
                                                                         onClick={() => this.deleteLogValue(element)}
                                                                         className="list-group-item list-group-item-action">{element}
                    </button>)}
                    </div>}
            </Log></>

    }
}

export default Layout