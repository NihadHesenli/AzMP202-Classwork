import './App.css'
import { Route, Routes } from "react-router-dom";
import AdminLayout from './components/Admin/AdminLayout';
import Home from './pages/Client/Home';
import Dashboard from '../../12.24.2024-Classwork/src/pages/Admin/Dashboard';
import ProductTable from './pages/Admin/ProductTable';
import ClientLayout from './components/Client/ClientLayour';
import Products from './pages/Client/Products';
import Contact from './pages/Client/Contact';
import Notfound from './layout/NotFound';

function App() {

  return (
    <>
    <Routes>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/admin/product-list' element={<ProductTable/>}/>
      </Route>
      <Route path='/' element={<ClientLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default App
