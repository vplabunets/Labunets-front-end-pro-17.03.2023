import "./App.css";
import {BtnGroup} from "../BtnGroup/BtnGroup";
import {buttonsData} from "../../data/data";

export function App() {

    return (
        <div className="container p-5">
            <BtnGroup buttonsData={buttonsData}/>
        </div>
    );
}

