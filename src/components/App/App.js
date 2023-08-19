import "./App.css";
import {Progress} from "../Progress/Progress";


export function App() {
    return (<>
        <div className="container p-5">
            <Progress percentage={0}/>
            <Progress percentage={25}/>
            <Progress percentage={50}/>
            <Progress percentage={75}/>
            <Progress percentage={100}/>
        </div>

    </>);
}

