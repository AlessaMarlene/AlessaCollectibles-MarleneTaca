import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartItem = ({itemInfo}) => {
    const {contextValue: {removeFromCart}} = useContext(CartContext);

    return (
        <article id='selectedProductContainer'>
            <div id="selectedProductInfo" className="valign-wrapper">
                <figure>
                    <img alt='itemImage' src={itemInfo.pictureUrl} width='200'/>
                </figure>
                <h5>{itemInfo.title}</h5>
                <p>Quantity: {itemInfo.quantity}</p>
                <h4>${itemInfo.price}</h4>
            </div>
            <button onClick={() => removeFromCart(itemInfo.id)}>Delete product</button>
        </article>
    );
}

export default CartItem;