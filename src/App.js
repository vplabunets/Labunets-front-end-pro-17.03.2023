import {Component} from "react";
import "./App.css";
import {text} from "./data/text";
import Form from "./components/Collapse";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <Form text={text}/>
            </div>
        )
    };
}

export default App