import {Component} from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import {pictures} from "./data/data";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <Carousel pictures={pictures}/>
            </div>
        )
    };
}

export default App