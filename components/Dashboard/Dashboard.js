import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Siderbar from './Sidebar/Sidebar';

const Dashboard = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <Siderbar></Siderbar>
        <div id="content-wrapper">
          <Header></Header>
          {/* <SystemAdminHeader></SystemAdminHeader> */}
          <div className="container-fluid">
            <main>{children}</main>
          </div>
          {/* <Footer></Footer> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
