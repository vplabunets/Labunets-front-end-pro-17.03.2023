import React, {Component} from "react";
import "./App.css";
import Layout from "./components/Layout";


class App extends Component {


    render() {
        return (
            <div className="container p-5">
                <Layout step={1} startNumber={0}>
                </Layout>


            </div>
        )
    };
}

export default App