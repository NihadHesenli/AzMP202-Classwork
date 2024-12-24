import { Outlet } from "react-router-dom"
import ClientHeader from "../../../layouts/Client/ClientHeader"


const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default ClientLayout