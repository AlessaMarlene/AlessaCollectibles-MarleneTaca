import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    return (
        <main>
            <h3>{greeting}</h3>
            <ItemList/>
        </main>
    );
}

export default ItemListContainer;