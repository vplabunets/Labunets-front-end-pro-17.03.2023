import React, {Component} from "react";
import "./App.css";
import Card from "./components/Card";
import CardTitle from "./components/Card.Title";
import CardText from "./components/Card.Text";
import CardBody from "./components/Card.Body";


class App extends Component {
    render() {
        return (
            <div className="container p-5">
                <Card>
                    <CardBody>
                        <CardTitle>Title</CardTitle>
                        <CardText>Text</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    };
}

export default App