import "./App.css";
import {ListGroup} from "../ListGroup/ListGroup";
import {listData} from "../../data/data";

export function App() {

    return (
        <div className="container p-5">
            <ListGroup listData={listData}/>
        </div>
    );
}

