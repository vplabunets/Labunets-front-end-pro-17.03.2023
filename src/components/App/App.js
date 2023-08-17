import './App.css';
import {Card} from "../Card/Card";


function App() {
    return <div className="container p-5">
        <Card title={"Mykola Kulish"}/>
        <Card text={"Ukrainian movie and theater director."}/>
        <Card
            title={"Vasyl Stus"}
            text={"Ukrainian poet, translator, literary critic, journalist," +
                " and an active member of the Ukrainian dissident movement"}
        />
    </div>
}

export default App;
