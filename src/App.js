import React, {Component} from "react";
import "./App.css";
import PostCatalog from "./components/PostCatalog";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <PostCatalog/>
            </div>
        )
    };
}

export default App