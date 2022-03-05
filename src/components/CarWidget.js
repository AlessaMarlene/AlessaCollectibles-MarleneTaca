import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CarWidget = () => {
    return (
        <div className='col s1 center-align' id='cart'>
            <FontAwesomeIcon icon={faCartShopping} size='lg'/>
            <span>0</span>
        </div>
    );
}

export default CarWidget;