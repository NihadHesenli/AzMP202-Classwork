import { Outlet } from "react-router-dom";
import ClientHeader from "../../../components/Client/ClientHeader";

const ClientLayout = () => {
  return (
      <>
      <ClientHeader/>
      <Outlet/>
      </>
  );
}

export default ClientLayout;
