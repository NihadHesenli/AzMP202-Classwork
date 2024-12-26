import './App.css'
import { Route, Routes } from "react-router-dom";
import AdminLayout from './components/Admin/AdminLayout';
import Home from './pages/Client/Home';
import Dashboard from '../../12.24.2024-Classwork/src/pages/Admin/Dashboard';

function App() {

  return (
    <>
    <Routes>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
