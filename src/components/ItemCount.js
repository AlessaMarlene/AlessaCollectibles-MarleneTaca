import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const ItemCount = ({stock, initialState, onAdd}) => {
    const [itemCounter, setItemCounter] = useState(initialState);

    const handleClick = (operator) => {
        if(operator === '+' && itemCounter < stock) setItemCounter(itemCounter + 1);
        else if(operator === '-' && itemCounter > 1) setItemCounter(itemCounter - 1);
    }

    return (
        <div className='center-align' id='itemCounter'>
            {itemCounter > 0 && <p className='green-text'>¡Stock still available!</p>}
            <div>
                <a 
                    className="btn-floating btn-medium waves-effect waves-light" 
                    onClick={() => handleClick('-')}
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </a>
                <span>{itemCounter}</span>
                <a 
                    className="btn-floating btn-medium waves-effect waves-light"
                    onClick={() => handleClick('+')}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                </a>
            </div>
            <a className="waves-effect waves-light btn-large" id='addCartButton'>Add to cart</a>
        </div>
    );
}

export default ItemCount;