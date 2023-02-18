import "./Style.css";

const ItemDetail = ({details}) => {
    console.log(details);
    return (
        <div className="details">
            <img alt="" src={details.imagen} width ="200px" height= "200px"/>
            <div>
                <h2>{details.nombre}</h2>
                <h3>{details.descripcion}</h3>
            </div>
        </div>
    )
}

export default ItemDetail
