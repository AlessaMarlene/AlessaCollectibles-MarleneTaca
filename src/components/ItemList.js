import Item from './Item';

const ItemList = ({figures}) => {
    return (
        <main id="itemList">
            {figures.map((figure) => <Item key={figure.id} item={figure}/>)}
        </main>
    );
}

export default ItemList;