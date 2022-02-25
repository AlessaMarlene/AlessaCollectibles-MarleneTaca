import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
    useEffect(() => {
        M.AutoInit();
    }, [])

    return (
        <div className="App">
        <NavBar/>
        </div>
    );
}

export default App;
