import "./Style.css"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartWidget () {
    const {cart} = useContext(CartContext);
    const navigate = useNavigate();
    const redireccionarCart = () => {
        navigate("/cart");
    }
    return (
        <div onClick={redireccionarCart} className="cart">
            <div className="numeroCart">{cart?.length}</div>
        </div>
    );
};