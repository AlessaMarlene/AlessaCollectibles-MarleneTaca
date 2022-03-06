const Item = ({item}) => {
    return (
        <article id='itemArticle'>
            <img alt='productImage' src={item.pictureUrl} width='250' height='200'/>
            <h4>{item.title}</h4>
            <h4>${item.price}</h4>
        </article>
    );
}

export default Item;