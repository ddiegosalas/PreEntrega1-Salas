import "./Style.css"

export default function CartWidget ({numero, texto}) {
    return (
        <div className="cart">
            <a onClick={() => {alert (texto)}}>{numero}</a>
        </div>
    );
}