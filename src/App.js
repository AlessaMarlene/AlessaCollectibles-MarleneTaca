import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { useEffect } from "react";
import './styles/global.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    useEffect(() => {
        M.AutoInit();
    }, [])

    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting='Welcome to the n°1 action figures store!!'/>}/>
                    <Route path='/collectibles' element={<ItemListContainer greeting=''/>}/>
                    <Route path='/collectibles/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/sale' element={<div>Sale</div>}/>
                    <Route path='/myAccount' element={<div>My Account</div>}/>
                    <Route path='/contact' element={<div>Contact</div>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;