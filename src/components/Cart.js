import CartItem from "./CartItem";
import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import db from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import OrderModals from "./OrderModals";

const Cart = () => {
    const {contextValue : { cartContent, cartTotalAmount, removeAllProducts }} = useContext(CartContext);
    const [userData, setUserData] = useState({name: '', phone: '', email: ''});
    const [finishedOrderId, setFinishedOrderId] = useState('');

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value.trim()});
    }

    const handleClick = () => {
        const order = {
            buyer: {
                name: userData.name,
                phone: userData.phone,
                email: userData.email
            },
            items: cartContent,
            date: serverTimestamp(),
            total: cartTotalAmount
        };
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(r => {
                setFinishedOrderId(r.id);
                removeAllProducts();
            })
            .catch(e => console.log(e));
    }

    return (
        <>
            {
                cartContent.length < 1 ? 
                <div>
                    <p>Cart is empty!</p>
                    <Link to='/collectibles'>Back to Collectibles</Link>
                </div>
                :
                <main>
                    <div>
                        {cartContent.map((item) => <CartItem key={item.id} itemInfo={item}/>)}
                    </div>
                    <div>
                        <h2>Total amount: {cartTotalAmount}</h2>
                        <button className="waves-effect waves-light btn modal-trigger" href="#prepareOrder">Prepare order</button>
                    </div>
                </main>
            }
            <OrderModals handleChange={handleChange} handleClick={handleClick} orderId={finishedOrderId}/>
        </>
    );
}

export default Cart;