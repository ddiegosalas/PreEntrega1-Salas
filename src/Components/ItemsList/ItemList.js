import "./Style.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom"

const ItemList = ({productList}) => {
    return (
        <div>
            <div className="itemList">
                {
                    productList.map((product, index) => (
                        <div key={product.id}>
                            <Link to={`/item/${product.id}`} className="styleLink">
                                <Item product = {product}/>
                            </Link>
                        </div>
                    ))
                }
            </div>
            
            
        </div>
    );
}

export default ItemList;