import "./App.css";
import {alertData} from "./data/data"
import {Alert} from "./components/Alert";

export function App() {
    console.log(alertData)
    return (
        <div className="container p-5">
            {alertData.map(({type, text}) => <Alert key={type} type={type} text={text}/>)}
        </div>
    );
}

