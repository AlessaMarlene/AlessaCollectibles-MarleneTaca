import ItemDetail from "./ItemDetail";
import figuresMock from '../utils/figuresMock.json';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const status = {
        initial: "initial",
        resolved: "resolved",
        rejected: "rejected",
    };
    let response;
    const [state, setStatus] = useState(status.initial);
    const [figureSelected, setFigureSelected] = useState({});
    const params = useParams();

    useEffect(() => {
        const timerId = setTimeout(() => {
            const promise = new Promise((res, rej) => {
                res(figuresMock.find(f => f.id == params.id));
            });

            promise
                .then(r => {
                    setFigureSelected(r);
                    setStatus('resolved');
                })
                .catch(err => setStatus('rejected'));
        }, 2000);

        return () => clearTimeout(timerId);
    }, []);

    if(state === status.initial) response = <h4>Loading figure details...</h4>
    else if(state === status.rejected) response = <h4>We can't seem to find this product. Try again later.</h4>
    else response = <ItemDetail figure={figureSelected}/>

    return (
        <div>{response}</div>
    );
}

export default ItemDetailContainer;