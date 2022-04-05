import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { useEffect } from "react";
import './styles/global.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import BrandsContainer from './components/BrandsContainer';
import {CartProvider} from './components/context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <div>
            <CartProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/collectibles/:id' element={<ItemDetailContainer/>}/>
                        <Route path='/brands' element={<BrandsContainer/>}/>
                        <Route path='/brands/:brandId' element={<ItemListContainer/>}/>
                        <Route path='/myAccount' element={<div>My Account</div>}/>
                        <Route path='/contact' element={<div>Contact</div>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;