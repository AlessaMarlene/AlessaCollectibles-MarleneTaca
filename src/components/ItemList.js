import { useEffect, useState } from "react";
import Item from './Item';
import figuresMock from '../utils/figuresMock.json';

const ItemList = () => {
    const status = {
        initial: "initial",
        resolved: "resolved",
        rejected: "rejected",
    };
    let response;
    const [state, setStatus] = useState(status.initial);
    const [figures, setFigures] = useState([]);

    useEffect(() => {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(figuresMock);
            }, 3000);
        });
        
        promise.then(res => {
            setFigures(res);
            setStatus(status.resolved);
        }).catch(err => setStatus(status.rejected));
    }, [])
    
    if(state === status.initial) response = <h4>Loading figures...</h4>
    else if(state === status.rejected) response = <h4>We can't seem to find any results now. Try again later.</h4>
    else response = figures.map((figure) => <Item key={figure.id} item={figure}/>);

    return (
        <main id="itemList">{response}</main>
    );
}

export default ItemList;