import {Component} from "react";
import "./App.css";
import Collapse from "./components/Collapse";
import {text} from "./data/text";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <Collapse text={text}/>
            </div>
        )
    };
}

export default App