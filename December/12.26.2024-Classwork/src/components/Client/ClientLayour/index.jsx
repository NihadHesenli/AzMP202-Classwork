import React from 'react';
import { Outlet } from 'react-router-dom';
import ClientHeader from '../../../layout/Client/ClientHeader';

const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  );
}

export default ClientLayout;
