import React, {Component} from "react";
import "./App.css";
import Card from "./components/Card";

class App extends Component {


    render() {
        console.log(Card.Title)
        return (
            <div className="container p-5">
                <Card>
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>Text</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    };
}

export default App