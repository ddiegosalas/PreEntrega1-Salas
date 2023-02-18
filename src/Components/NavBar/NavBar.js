import { Link} from "react-router-dom";
import "./Style.css"
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar () {
    return (
        <div className="navBar">
            <div className="logo"></div>
            <div>
                <ul className="items">
                    <li>
                        <Link to="/" className="style">Menu</Link>
                    </li>
                    <li>
                        <Link to="/category/Vegan" className="style">Vegan</Link>
                    </li>
                    <li>
                        <Link to="/category/Veggie" className="style">Veggie</Link>
                    </li>
                    <li>
                        <Link to="/category/Carne" className="style">Carne</Link>
                    </li>
                </ul>
            </div>
            <CartWidget numero = "1" texto = "Tiene agregado 1 item al changuito"/>
        </div>
    );
}