import ItemDetail from "./ItemDetail";
import figuresMock from '../utils/figuresMock.json';
import { useEffect, useState } from "react";

const getItem = () => new Promise((res, rej) => {
        setTimeout(() => {
            res(figuresMock[2]);
        }, 2000);
});

const ItemDetailContainer = () => {
    const status = {
        initial: "initial",
        resolved: "resolved",
        rejected: "rejected",
    };
    let response;
    const [state, setStatus] = useState(status.initial);
    const [figureSelected, setFigureSelected] = useState({});

    useEffect(() => {
        getItem()
            .then(r => {
                setFigureSelected(r);
                setStatus('resolved');
            })
            .catch(err => setStatus('rejected'));
    }, []);

    if(state === status.initial) response = <h4>Loading figure details...</h4>
    else if(state === status.rejected) response = <h4>We can't seem to find this product. Try again later.</h4>
    else response = <ItemDetail figure={figureSelected}/>

    return (
        <div>{response}</div>
    );
}

export default ItemDetailContainer;