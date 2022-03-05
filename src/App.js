import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { useEffect } from "react";
import './styles/global.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    useEffect(() => {
        M.AutoInit();
    }, [])

    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting='Welcome to the n°1 action figures store!!'/>
        </div>
    );
}

export default App;