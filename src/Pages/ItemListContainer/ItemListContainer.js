import { useEffect, useState} from "react";
import ItemList from "../../Components/ItemsList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [productsList, setProductList] = useState ([]);
    const {categoryId} = useParams();

    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, "Productos");
        const querySnapshot = categoryId 
            ? query(queryBase, where("Categoria", "==", categoryId))
            : queryBase;

            getDocs(querySnapshot)
            .then((response)=>{
                const list = response.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                });
                setProductList(list);
            })
            .catch((error) => console.log(error));
    };

    useEffect(()=>{
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId]);

    return <div>
        <ItemList productList = {productsList}/>
    </div>;
};

export default ItemListContainer;