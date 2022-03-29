import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CarWidget = () => {
    const {contextValue: {cartItemsQuantity}} = useContext(CartContext);

    return (
        cartItemsQuantity > 0 &&
        <Link to='/cart' className='col s1 center-align' id='cart'>
            <FontAwesomeIcon icon={faCartShopping} size='lg'/>
            <span>{cartItemsQuantity}</span>
        </Link>
    )
}

export default CarWidget;