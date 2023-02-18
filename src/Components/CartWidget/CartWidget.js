import "./Style.css"

export default function CartWidget ({numero, texto}) {
    return (
        <div className="cart">
            <a href="/" onClick={() => {alert (texto)}}>{numero}</a>
        </div>
    );
}