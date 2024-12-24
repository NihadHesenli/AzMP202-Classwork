
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/Client/ClientLayout'
import Home from './pages/Client/Home'
import Products from './pages/Client/Product'
import Contact from './pages/Client/Contact'
import AdminLayout from './components/Admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
import Users from './pages/Admin/Users'
import AdminProducts from './pages/Admin/Product'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<ClientLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='contact' element={<Contact/>}/>
      </Route>

      <Route path='/admin' element={<AdminLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='products' element={<AdminProducts/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
