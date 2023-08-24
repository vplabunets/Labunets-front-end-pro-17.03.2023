import {Component} from "react";
import "./App.css";
import Collapse from "./components/Collapse";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <Collapse/>
            </div>
        )
    };
}

export default App