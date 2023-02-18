import { Products } from "../../Data/Products/Products";
import { useEffect, useState} from "react";
import ItemList from "../../Components/ItemsList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productsList, setProductList] = useState ([]);
    const {categoryId} = useParams();
    const getProducts = new Promise((res, rej) => {
        if(categoryId){
            const filterProducts = Products.filter((Products)=>Products.categoria ===categoryId);
            setTimeout(()=>{
                res(filterProducts);
            }, 300);
        }else{
            setTimeout(()=>{
                res(Products);
            }, 300);
        }
    });

    useEffect(()=>{
        getProducts
            .then((response) => {
                setProductList(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId]);

    return <div>
        <ItemList productList = {productsList}/>
    </div>;
};

export default ItemListContainer;