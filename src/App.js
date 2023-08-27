import {Component} from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";


class App extends Component {
    state = {
        currentData: {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
        },
        acceptRules: false,
        isSubmitted: false
    }
    isSubmitted

    handleChange = event => {
        this.setState(prevState => {
            return {
                currentData: {...prevState.currentData, [event.target.name]: event.target.value}
            }
        })
    };

    handleChecked = (event) => {
        this.setState(prevState => {
            return {
                ...prevState, acceptRules: event.target.checked
            }
        })
    }

    handleForm = (event) => {
        event.preventDefault()
        if (!this.state.acceptRules) return
        this.setState(prevState => {
            return {
                ...prevState, isSubmitted: !this.state.isSubmitted
            }
        })
    };

    handleButtonBack = () => {
        this.setState(prevState => {
            return {
                ...prevState, isSubmitted: !this.state.isSubmitted
            }
        })
    }

    render() {
        return (
            <div className="container p-5">
                {!this.state.isSubmitted &&
                    < Form state={this.state} handleChange={this.handleChange} handleForm={this.handleForm}
                           handleChecked={this.handleChecked}/>}
                {this.state.isSubmitted &&
                    <Table data={this.state.currentData} handleButtonBack={this.handleButtonBack}/>}
            </div>
        )
    };
}

export default App