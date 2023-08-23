import {Component} from "react";
import {buttonsData} from "./data/data";
import "./App.css";
import BtnGroup from "./components/BtnGroup";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <BtnGroup buttonsData={buttonsData}/>
            </div>
        )
    };
}

export default App