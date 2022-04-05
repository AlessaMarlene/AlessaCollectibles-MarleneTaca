import { useEffect, useState } from "react";
import db from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { PacmanLoader } from "react-spinners";
import Brand from "./Brand";

const BrandsContainer = () => {
    const status = {
        initial: "initial",
        resolved: "resolved",
        rejected: "rejected",
    };
    let response;
    const [state, setStatus] = useState(status.initial);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const brandCollection = getDocs(collection(db, "brands"));
        brandCollection
            .then(r => {
                const allBrands = [];
                r.forEach(doc => {
                    const newBrand = {id: doc.id, ...doc.data()};
                    allBrands.push(newBrand);
                });
                setBrands(allBrands);
                setStatus(status.resolved);
            })
            .catch(e => setStatus(status.rejected));
    }, []);

    if(state === status.rejected) response = <h4>We can't seem to find any brand now. Try again later.</h4>;
    else if(state === status.resolved) response = brands.map(brand => <Brand key={brand.id} brand={brand}/>);

    return (
        <main>
            <PacmanLoader loading={state === status.initial && true} size={100} color={'#f37223'}/>
            {response}
        </main>
    );
}

export default BrandsContainer;