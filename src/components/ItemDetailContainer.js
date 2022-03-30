import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase';
import { doc, getDoc } from "firebase/firestore";

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
        const docRef = doc(db, "products", `${params.id}`);
        const product = getDoc(docRef);

        product
            .then(r => {
                setFigureSelected(r.data());
                setStatus('resolved');
            })
            .catch(e => setStatus('rejected'));
    }, []);

    if(state === status.initial) response = <h4>Loading figure details...</h4>
    else if(state === status.rejected) response = <h4>We can't seem to find this product. Try again later.</h4>
    else response = <ItemDetail figure={figureSelected}/>

    return (
        <div>{response}</div>
    );
}

export default ItemDetailContainer;