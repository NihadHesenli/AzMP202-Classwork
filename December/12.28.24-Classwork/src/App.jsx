import { Route, Routes } from "react-router-dom";
import ClientLayout from './layout/Client/ClientLayout'
import Home from './pages/Client/Home'
import Contact from './pages/Client/Contact'
import Products from './pages/Client/Products'
import ProductDetail from './pages/Client/ProductDetail'
import Favoritest from './pages/Client/Favoritest'
import AdminLayout from './layout/Admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
import AdminProduct from './pages/Admin/AdminProduct'
import AddProducts from './pages/Admin/AddProducts'
import NotFound from './components/NotFound'

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        //client
        <Route path="/" element={<ClientLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" >
            <Route index element={<Products/>}/>
            <Route path=":id" element={<ProductDetail/>}/>
          </Route>
          <Route path="favoritest" element={<Favoritest/>}/>
        </Route>
        //admin 
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/admin/product-list" element={<AdminProduct/>}/>
          <Route path="/admin/add-product" element={<AddProducts/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
