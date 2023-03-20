import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import {getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const{id} = useParams();
    const [detailProduct, setDetailProduct] = useState ({});
    const getProduct = () =>{
      const db = getFirestore();
      const querySnapshot = doc(db, "Productos", id);

      getDoc(querySnapshot)
        .then((res)=>{
          setDetailProduct({
            id: res.id,
            ...res.data()
          })
        })
        .catch((error)=> console.log(error))
    };

    useEffect(()=>{
        getProduct();
    }, [])

  return(
    <div>
      <ItemDetail details={detailProduct}/>
    </div>
  )
};

export default ItemDetailContainer