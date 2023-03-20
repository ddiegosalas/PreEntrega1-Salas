import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Cart from "./Pages/Cart/Cart";
import CartProvider from "./Context/CartProvider";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
