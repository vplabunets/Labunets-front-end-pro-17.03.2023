import React, {Component} from 'react'

class Collapse extends Component {
    state = {
        opened: true
    }
    onClickHandler = (event) => {
        this.setState((prevState => {
            return {opened: !prevState.opened}
        }))
    }


    render() {
        return (<div>
            <p>
                <a className="btn btn-primary" href="#" role="button" aria-expanded="false"
                   onClick={this.onClickHandler}> Push
                    me {this.state.opened ? "to close component below" : "to open component below"}</a>
            </p>
            {this.state.opened &&
                <div className="card card-body">
                    {this.props.text}
                </div>
            }
        </div>)

    }
}

export default Collapse