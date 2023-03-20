import "./Style.css";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({details}) => {
    const navigate = useNavigate();
    const {agregarItem} = useContext(CartContext);
    const botonAgregar = (event) => {
        event.preventDefault();
        agregarItem(details, count);
        navigate("/");
    };
    
    const [count, setCount] = useState(0);
    return (
        <div className="details">
            <img alt="" src={`/img/${details.Imagen}`}/>
            <div>
                <h2>{details.Titulo}</h2>
                <h3>{details.Descripcion}</h3>
            </div>
            <div className="contador">
                <div>
                    <ItemCount count={count} setCount={setCount} />
                </div>
                <button onClick={botonAgregar} type="button" className="agregarCarrito">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail