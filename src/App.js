import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { useEffect } from "react";
import './styles/global.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    useEffect(() => {
        M.AutoInit();
    }, [])

    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting='Welcome to the n°1 action figures store!!'/>
            <ItemDetailContainer/>
        </div>
    );
}

export default App;