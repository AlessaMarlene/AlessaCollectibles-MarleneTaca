import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import M from 'materialize-css';
import { useEffect } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({figure}) => {
    useEffect(() => M.Materialbox.init(document.querySelectorAll('.materialboxed')), []);
    const onAdd = () => {}

    return (
        <main>
            <div id='primaryDetails'>
                <div className='detailsBox'>
                    <img alt='figure' src={figure.pictureUrl} className="materialboxed" width="750"/>
                </div>
                <div className='detailsBox'>
                    <h2>{figure.title}</h2>
                    <h3>${figure.price}</h3>
                    <ItemCount stock={10} initialState={1} onAdd={onAdd}/>
                </div>
            </div>
            <div id='productDescription'>
                <div id='descriptionTitle'>
                    <p>Description</p>
                    <FontAwesomeIcon icon={faAngleRight} size='lg'/>
                </div>
                <div id='descriptionBody'>
                    <p>About this statue</p>
                    <p>{figure.description}</p>
                </div>
            </div>
        </main>
    );
}

export default ItemDetail;