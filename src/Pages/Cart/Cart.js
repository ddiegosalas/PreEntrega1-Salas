import "./Style.css"
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import {getFirestore, addDoc, collection} from "firebase/firestore";

const Cart = () => {
  const{cart, vaciarCart, removerProducto, total} = useContext(CartContext);

  const [formValor, setFormValor] = useState({
    Nombre: "",
    Mail: "",
    Telefono: "",
  });

  const crearOrden = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const querySnapshot = collection(db, "Orders");

    addDoc(querySnapshot, {
      Comprador: {
        Mail: formValor.Mail,
        Nombre: formValor.Nombre,
        Telefono: formValor.Telefono,
      },
      Productos: cart.map((producto)=>{
        return {
          Titulo: producto.nombre,
          Precio: producto.precio,
          id: producto.id,
          Cantidad: producto.cantidad,
        }
      }),
      Total: cart.reduce((acc, curr)=> acc + (curr.Precio * curr.Cantidad), 0),
    })
      .then((response)=>{
        console.log(response.id);
        alert (`Orden con el id: ${response.id} ha sido creada`);
      })
      .catch((error)=> console.log(error));
  };
  
  const handleInput = (event) => {

    console.log(event.target.value);
    console.log(event.target.name);
    setFormValor({
      ...formValor,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="carrito">
    <div className="carritoDefault">
      <h2>Producto</h2>
      <h2>Cantidad</h2>
      <h2>Precio</h2>
      <h2>Eliminar</h2>
    </div>
    {cart.map((producto) => (
      <div className="carritoProductos" key={producto.nombre}>
        <h2>{producto.nombre}</h2>
        <h2>{producto.cantidad}</h2>
        <h2>${producto.precio}</h2>
        <button onClick={() => removerProducto(producto.id)} className="eliminar"></button>
      </div>
    ))}
    {cart.length === 0 && <div className="alerta">NO HAY PRODUCTOS EN EL CARRITO</div>}
    {cart.length > 0 && <div className="total">El total es: ${total()}</div>}
    {cart.length > 0 && <button onClick={vaciarCart} className="botonVaciar">Vaciar Carrito</button>}
    <div>
      <form className="cartForm">
        <input name="Nombre" type="text" placeholder="Nombre" value={formValor.Nombre} onChange={handleInput}/>
        <input name="Mail" type="text" placeholder="Mail" value={formValor.Mail} onChange={handleInput}/>
        <input name="Telefono" type="text" placeholder="Telefono" value={formValor.Telefono} onChange={handleInput}/>
        <button onClick={crearOrden} className="botonVaciar">Completar Compra</button>
      </form>
    </div>
  </div>
  );
};
  export default Cart