import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { PacmanLoader } from "react-spinners";

const ItemDetailContainer = () => {
    const status = {
        initial: "initial",
        resolved: "resolved",
        rejected: "rejected",
    };
    let response;
    const [state, setStatus] = useState(status.initial);
    const [figureSelected, setFigureSelected] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const docRef = doc(db, "products", `${id}`);
        getDoc(docRef)
            .then(r => {
                setFigureSelected({id: id, ...r.data()});
                setStatus(status.resolved);
            })
            .catch(e => setStatus(status.rejected));
    }, []);

    if(state == status.rejected) response = <h4>We can't seem to find this product. Try again later.</h4>
    else if(state === status.resolved) response = <ItemDetail figure={figureSelected}/>

    return (
        <main>
            <PacmanLoader loading={state === status.initial && true} size={100} color={'#f37223'}/>
            {response}
        </main>
    );
}

export default ItemDetailContainer;