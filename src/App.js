import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {

  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
