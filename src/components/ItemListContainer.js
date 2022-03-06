import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    return (
        <main>
            <h3>{greeting}</h3>
            <ItemList/>
            <ItemCount stock={10} initialState={1}/>
        </main>
    );
}

export default ItemListContainer;