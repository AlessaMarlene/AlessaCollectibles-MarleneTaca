import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (product, productQuantity) => {
        if(cart.some(p => p.id == product.id)){
            const newCart = cart.map((p) => {
                if(p.id === product.id) p.quantity = p.quantity + productQuantity;
                return p;
            })
            setCart(newCart);
        }else{
            const cartContentItem = {...product, quantity: productQuantity};
            setCart([...cart, cartContentItem]);
        }
    }

    const removeProduct = (productId) => {
        const newCart = cart.filter(p => p.id != productId);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (productId) => {
        return cart.some(p => p.id == productId);
    }

    const contextValue = {
        cartContent: cart,
        addToCart: addProduct,
        removeFromCart: removeProduct,
        removeAllProducts: clearCart,
        isProductInCart: isInCart
    }

    return (
        <CartContext.Provider value={{contextValue}}>
            {children}
        </CartContext.Provider>
    );
}

export {CartProvider, CartContext};