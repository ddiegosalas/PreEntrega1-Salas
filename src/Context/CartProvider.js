import { CartContext } from "./CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const agregarItem = (item, cantidad) => {
        if(verificarRepetido(item.id)){
            sumarRepetido(item.id, cantidad);
        }else{
            const producto = {
                id: item.id,
                nombre: item.Titulo,
                precio: item.Precio,
                imagen: item.Imagen,
                descripcion: item.Descripcion,
                categoria: item.Categoria,
                cantidad: cantidad,
            };
            setCart([...cart, producto]);
        }
    };

    const vaciarCart = () => {
        setCart ([]);
    };

    const removerProducto = (data) => {
        const indice = cart.findIndex((producto)=> producto.id === data);
        if(cart[indice].cantidad > 1){
            cart[indice].cantidad -= 1;
            navigate("/cart");
            total();
        }else{
            setCart(cart.filter((producto) => producto.id !== data));
            total();
        }
    };

    const verificarRepetido = (data) => {
        if(cart.find((producto) => producto.id === data)){
            return true;
        };
    };

    const sumarRepetido = (data, agregado) => {
        const indice = cart.findIndex((producto)=> producto.id === data);
        cart[indice].cantidad += agregado;
    };

    const total = () => {
        let acumulador = 0;
        for(let i= 0; i < cart.length; i++){
            acumulador += ((cart[i].precio) * (cart[i].cantidad));
        }
        return acumulador;
    };

    return (
    <CartContext.Provider value={{cart, agregarItem, vaciarCart, removerProducto, total}}>{children}</CartContext.Provider>
  );
};

export default CartProvider;