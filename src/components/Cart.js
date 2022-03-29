import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {contextValue : { cartContent }} = useContext(CartContext);

    return (
        cartContent.length < 1 ? 
        <>
            <p>Cart is empty!</p>
            <Link to='/collectibles'>Back to Collectibles</Link>
        </>
        :
        <div>
            {cartContent.map((item) => <CartItem key={item.id} itemInfo={item}/>)}
        </div>
    );
}

export default Cart;