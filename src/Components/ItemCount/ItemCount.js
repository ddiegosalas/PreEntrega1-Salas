import "./Style.css";

const ItemCount = ({count, setCount}) => {

    const sumar = () => {
        setCount(count + 1);
    };
    const restar = () => {
        if(count === 0){
            return;
        }else{
            setCount(count - 1);
        }
    }
    return(
        <div className="contador">
            <div className="controles">
                <button onClick={restar}>-</button>
                <div>
                    <span>{count}</span>
                </div>
                <button onClick={sumar}>+</button>
            </div>
        </div>
    );
};

export default ItemCount;