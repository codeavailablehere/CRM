import React, { useState, useEffect } from 'react';
import { Images } from '../../../Images';
import { useNavigate } from 'react-router-dom';
import './Header.css';
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(false);
  const [message, setMessage] = useState(false);
  const navigation = useNavigate();

  const [userType, setUserType] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserType(user.results[0]?.user_type);
    }
  }, []);
  const clearlocalStorage = () => {
    localStorage.removeItem('user');
    window.location.reload(false);
    navigation.push('/');
  };

  return (
    <>
      <div id="content">
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button
            id="sidebarToggleTop"
            className="btn btn-link rounded-circle mr-3"
          >
            {' '}
            <i className="fas fa-bars"></i>{' '}
          </button>
          {userType === 'System Admin' && (
            <div className="lft-profile d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100">
              <div className="user-name">Welcome to beat CRM</div>
              <small>Good Afternnoon, Let’s check your work today.</small>
            </div>
          )}
          {userType === 'Client Admin' && (
            <div className="lft-profile d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100">
              <div className="user-name">Hey! Vikas kumar</div>
              <small>Good Afternnoon, Let’s check your work today.</small>
            </div>
          )}
          {userType === 'Client Admin' && (
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 navbar-search">
              <div className="input-group">
                <div className="input-group-append">
                  <button className="btn" type="button">
                    {' '}
                    <i className="fas fa-search fa-sm"></i>{' '}
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
              </div>
            </form>
          )}

          <ul className="navbar-nav">
            {userType === 'Client Admin' && (
              <li className="nav-item dropdown no-arrow d-sm-none">
                {' '}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {' '}
                  <i className="fas fa-search fa-fw"></i>{' '}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          {' '}
                          <i className="fas fa-search fa-sm"></i>{' '}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            )}

            <li
              className={
                visible
                  ? 'nav-item dropdown no-arrow mx-1 show'
                  : 'nav-item dropdown no-arrow mx-1'
              }
            >
              {' '}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                onClick={() => setVisible(!visible)}
                aria-haspopup="true"
                aria-expanded={visible ? 'false' : 'true'}
              >
                {' '}
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter">
                  3+
                </span>{' '}
              </a>
              <div
                className={
                  visible
                    ? 'dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show'
                    : 'dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in'
                }
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header"> Alerts Center </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      {' '}
                      <i className="fas fa-file-alt text-white"></i>{' '}
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">May, 2023</div>
                    <span className="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>{' '}
                  </div>
                </a>{' '}
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      {' '}
                      <i className="fas fa-donate text-white"></i>{' '}
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">May, 2023</div>
                    $290.29 has been deposited into your account!{' '}
                  </div>
                </a>{' '}
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      {' '}
                      <i className="fas fa-exclamation-triangle text-white"></i>{' '}
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">May, 2023</div>
                    Spending Alert: We've noticed unusually high spending for
                    your account.{' '}
                  </div>
                </a>{' '}
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Show All Alerts
                </a>{' '}
              </div>
            </li>

            <li
              className={
                message
                  ? 'nav-item dropdown no-arrow mx-1 show'
                  : 'nav-item dropdown no-arrow mx-1'
              }
              onClick={() => {
                setMessage(!message);
              }}
            >
              {' '}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {' '}
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter">7</span>{' '}
              </a>
              <div
                className={
                  message
                    ? 'dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in show'
                    : 'dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in'
                }
                aria-labelledby="messagesDropdown"
              >
                <h6 className="dropdown-header"> Message Center </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    {' '}
                    <img
                      className="rounded-circle"
                      src={Images.profile2}
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div className="small text-gray-500">
                      Emily Fowler · 58m
                    </div>
                  </div>
                </a>{' '}
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    {' '}
                    <img
                      className="rounded-circle"
                      src={Images.profile1}
                      alt="..."
                    />
                    <div className="status-indicator"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div className="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>{' '}
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    {' '}
                    <img
                      className="rounded-circle"
                      src={Images.profile3}
                      alt="..."
                    />
                    <div className="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div className="small text-gray-500">
                      Morgan Alvarez · 2d
                    </div>
                  </div>
                </a>{' '}
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    {' '}
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div className="small text-gray-500">
                      Chicken the Dog · 2w
                    </div>
                  </div>
                </a>{' '}
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>{' '}
              </div>
            </li>
            <div className="topbar-divider d-none d-sm-block"></div>
            <li
              className={
                user
                  ? 'nav-item dropdown no-arrow show'
                  : 'nav-item dropdown no-arrow'
              }
              onClick={() => setUser(!user)}
            >
              {' '}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {' '}
                <span className="name-letter rounded-circle">G</span>{' '}
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Gargi
                </span>{' '}
              </a>
              <div
                className={
                  user
                    ? 'dropdown-menu dropdown-menu-right shadow animated--grow-in show'
                    : 'dropdown-menu dropdown-menu-right shadow animated--grow-in'
                }
                aria-labelledby="userDropdown"
              >
                {' '}
                <a className="dropdown-item" href="#">
                  {' '}
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>{' '}
                  Profile{' '}
                </a>{' '}
                <a className="dropdown-item" href="#">
                  {' '}
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>{' '}
                  Settings{' '}
                </a>{' '}
                <a className="dropdown-item" href="#">
                  {' '}
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>{' '}
                  Activity Log{' '}
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={clearlocalStorage}
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  {' '}
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>{' '}
                  Logout{' '}
                </a>{' '}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
