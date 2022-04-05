import { Link } from "react-router-dom";

const Brand = ({brand}) => {
    return (
        <Link to={`/brands/${brand.id}`}>
            <img alt={brand.name} src={brand.brandImage}/>
        </Link>
    );
}

export default Brand;