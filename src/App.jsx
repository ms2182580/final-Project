import { Routes, Route } from "react-router-dom";
import Products from "./Products/Products";
import Cart from "./Products/Cart";
import AddNewPro from "./Products/AddNewPro";
import EditPro from "./Products/EditPro";
import Login from "./LoginPage/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Products" element={<Products />} />

        <Route path="/Cart" element={<Cart />} />
        <Route path="/EditPro" element={<EditPro />}></Route>
        <Route path="/AddNewPro" element={<AddNewPro />} />
      </Routes>
    </>
  );
}

export default App;
