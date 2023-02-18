import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Products } from "../../Data/Products/Products";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const{id} = useParams();
    const [detailProduct, setDetailProduct] = useState ({});
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            const findProduct = Products.find(item => item.id == id);
            resolve(findProduct);
        }, 200);
    });

    useEffect(()=>{
        getProduct
        .then(response => {
            setDetailProduct(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

  return(
    <div>
      <ItemDetail details={detailProduct}/>
    </div>
  )
};

export default ItemDetailContainer
