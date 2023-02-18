import "./Style.css";

const Item = ({product}) => {
    return (
        <div className="item">
            <img alt="" src={product.imagen} width ="200px" height= "200px"/>
            <h2>{product.nombre}</h2>
            <h3>${product.precio}</h3>
        </div>
    );
};

export default Item;