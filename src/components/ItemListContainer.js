import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <main>
            <h3>{greeting}</h3>
            <ItemCount stock={10} initialState={1}/>
        </main>
    );
}

export default ItemListContainer;