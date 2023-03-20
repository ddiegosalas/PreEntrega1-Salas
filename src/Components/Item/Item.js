import "./Style.css";

const Item = ({product}) => {
    return (
        <div className="item">
            <img alt="" src={`/img/${product.Imagen}`}/>
            <h2>{product.Titulo}</h2>
            <h3>${product.Precio}</h3>
        </div>
    );
};

export default Item;