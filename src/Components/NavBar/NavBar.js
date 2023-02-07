import "./Style.css"
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar () {
    return (
        <div className="navBar">
            <div className="logo"></div>
            <div className="items">
                <a href="#" className="animacionItem">Menu</a>
                <a href="#" className="animacionItem">Localidades</a>
                <a href="#" className="animacionItem">Contacto</a>
            </div>
            <CartWidget numero = "1" texto = "Tiene agregado 1 item al changuito"/>
        </div>
    );
}