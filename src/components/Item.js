import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={`/collectibles/${item.id}`}>
            <article id='itemArticle'>
                <img alt='productImage' src={item.pictureUrl} width='250' height='200'/>
                <h4>{item.title}</h4>
                <h4>${item.price}</h4>
            </article>
        </Link>
    );
}

export default Item;