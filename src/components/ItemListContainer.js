import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase';
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import { PacmanLoader } from "react-spinners";

const ItemListContainer = () => {
    const status = {
        initial: "initial",
        resolved: "resolved",
        rejected: "rejected",
    };
    let response;
    const [state, setStatus] = useState(status.initial);
    const [figures, setFigures] = useState([]);
    const {brandId} = useParams();

    useEffect(() => {
        let productCollection;

        if(brandId){
            const brandRef = doc(db, "brands", brandId);
            const productsQuery = query(collection(db, "products"), where("brand", "==", brandRef));
            productCollection = getDocs(productsQuery);
        }else{
            productCollection = getDocs(collection(db, "products"));
        }

        productCollection
            .then(r => {
                const allProducts = r.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setFigures(allProducts);
                setStatus(status.resolved);
            })
            .catch(e => setStatus(status.rejected));
    }, []);
    
    if(state === status.rejected) response = <h4>We can't seem to find any product now. Try again later.</h4>
    else if(state === status.resolved) response = <ItemList figures={figures}/>

    return (
        <main id="collectibles">
            <PacmanLoader loading={state === status.initial && true} size={100} color={'#f37223'}/>
            {response}
        </main>
    );
}

export default ItemListContainer;