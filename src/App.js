import {Component} from "react";
import {listData} from "./data/data";
import "./App.css";
import ListGroup from "./components/ListGroup";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <ListGroup listData={listData}/>
            </div>
        );
    }
}

export default App