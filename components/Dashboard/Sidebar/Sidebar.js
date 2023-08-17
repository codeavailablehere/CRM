import React, { useState, useEffect } from 'react';

import '../Sidebar/Sidebar.css';

import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [visibleA, setVisibleA] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserType(user.results[0]?.user_type);
    }
  }, []);

  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link className="sidebar-brand" to="#">
          {/* <div className="sidebar-brand-icon rotate-n-15"> <i className="fas fa-laugh-wink"></i> </div> */}
          <div className="sidebar-brand-text mx-3">
            <Logo></Logo>
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />
        <div className="sidebar-heading"> Menu </div>

        {userType === 'Client Admin' && (
          <li className="nav-item active">
            {' '}
            <Link className="nav-link" to="">
              {' '}
              <i className="fas fa-fw fa-tachometer-alt"></i>{' '}
              <span>Dashboard</span>
            </Link>{' '}
          </li>
        )}
        {userType === 'Client Admin' && (
          <li className="nav-item">
            {' '}
            <Link className="nav-link" to="#">
              {' '}
              <i className="fas fa-fw fa-chart-area"></i> <span>Lead</span>{' '}
              <span class="badge badge-secondary text-right">8</span>
            </Link>{' '}
          </li>
        )}
        {userType === 'Client Admin' && (
          <li className="nav-item">
            {' '}
            <Link className="nav-link" to="#">
              {' '}
              <i className="fas fa-fw fa-chart-area"></i> <span>Reports</span>{' '}
            </Link>{' '}
          </li>
        )}

        {userType === 'System Admin' && (
          <li className="nav-item">
            {' '}
            <Link className="nav-link" to="/">
              {' '}
              <i className="fas fa-fw fa-shopping-cart"></i>{' '}
              <span>Clients</span>{' '}
              <span class="badge badge-secondary text-right">8</span>
            </Link>{' '}
          </li>
        )}
        {/* <li className="nav-item">
          <Link className={visible ? "nav-link" : "nav-link collapsed"} to="#" data-toggle="collapse" data-target="#collapseTwo" onClick={() => setVisible(!visible)}
            aria-expanded={visible ? "true" : "false"} aria-controls="collapseTwo"> <i className="fas fa-fw fa-cog"></i> <span>User</span> </Link>
          <div id="collapseTwo" className={visible ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">

              <Link className="collapse-item" to="/departments">Departments</Link>
              <Link className="collapse-item" to="/sub-departments">Sub Departments</Link>
              <Link className="collapse-item" to="/users">Users</Link>

            </div>

          </div>
        </li> */}

        {/* <li className="nav-item"> <Link className={visibleA ? "nav-link" : "nav-link collapsed"} to="#" data-toggle="collapse" onClick={() => setVisibleA(!visibleA)} data-target="#collapseUtilities"
          aria-expanded={visibleA ? "true" : "false"} aria-controls="collapseUtilities"> <i className="fas fa-fw fa-wrench"></i> <span>Utilities</span> </Link>
          <div id="collapseUtilities" className={visibleA ? "collapse show" : "collapse"} aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" to="utilities-color.html">Colors</Link> <Link className="collapse-item" to="utilities-border.html">Borders</Link> <Link className="collapse-item" to="utilities-animation.html">Animations</Link> <Link className="collapse-item" to="utilities-other.html">Other</Link> </div>
          </div>
        </li> */}

        {/* <hr className="sidebar-divider" /> */}

        {/* <div className="sidebar-heading"> Addons </div>


        <li className="nav-item"> <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
          aria-expanded="true" aria-controls="collapsePages"> <i className="fas fa-fw fa-folder"></i> <span>Pages</span> </Link>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" to="login.html">Login</Link> <Link className="collapse-item" to="register.html">Register</Link> <Link className="collapse-item" to="forgot-password.html">Forgot Password</Link>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" to="404.html">404 Page</Link> <Link className="collapse-item" to="blank.html">Blank Page</Link> </div>
          </div>
        </li>


        <li className="nav-item"> <Link className="nav-link" to="charts.html"> <i className="fas fa-fw fa-chart-area"></i> <span>Charts</span></Link> </li>


        <li className="nav-item"> <Link className="nav-link" to="tables.html"> <i className="fas fa-fw fa-table"></i> <span>Tables</span></Link> </li> */}

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </>
  );
};

export default Sidebar;
