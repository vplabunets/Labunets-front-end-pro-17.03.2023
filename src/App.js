import {Component} from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import {colors} from "./data/data";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <Carousel colors={colors}/>
            </div>
        )
    };
}

export default App