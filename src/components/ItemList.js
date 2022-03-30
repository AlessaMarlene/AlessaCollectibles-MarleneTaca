import { useEffect, useState } from "react";
import Item from './Item';
import db from '../firebase';
import { collection, getDocs } from "firebase/firestore";

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
        const productCollection = getDocs(collection(db, "products"));
        productCollection
            .then(r => {
                const allProducts = [];
                r.forEach(doc => {
                    const newFigure = {id: doc.id, ...doc.data()};
                    allProducts.push(newFigure);
                });
                setFigures(allProducts);
                setStatus(status.resolved);
            })
            .catch(e => setStatus(status.rejected));
    }, []);
    
    if(state === status.initial) response = <h4>Loading figures...</h4>
    else if(state === status.rejected) response = <h4>We can't seem to find any results now. Try again later.</h4>
    else response = figures.map((figure) => <Item key={figure.id} item={figure}/>);

    return (
        <main id="itemList">{response}</main>
    );
}

export default ItemList;