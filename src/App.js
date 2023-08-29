import React, {Component} from "react";
import "./App.css";
import Portal from "./components/Portal";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <Portal/>
            </div>
        )
    };
}

export default App