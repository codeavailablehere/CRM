import './App.css';
import React, { useState, useEffect } from 'react';
import './assets/css/Style.css';
import './assets/css/sb-admin-2.min.css';
import './assets/vendor/fontawesome-free/css/all.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import ForgotePossword from './components/ForgotePassword/ForgotePossword';
import Dashboard from './components/Dashboard/Dashboard';
import ClientsList from './pages/systemAdmin/ClientsList';
import Home from './pages/home/Home';
import Footer from './components/Dashboard/Footer/Footer';
import SystemAdmin from './pages/systemAdmin/SystemAdmin';
function App() {
  const [data, setUser] = useState('');
  const [userType, setUserType] = useState('');
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
      setUserType(user.results[0]?.user_type);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        {data?.status === 'success' ? (
          <Dashboard>
            <Routes>
              {userType === 'System Admin' ? (
                <Route path="/" element={<SystemAdmin />}></Route>
              ) : (
                <Route path="/" element={<Home></Home>}></Route>
              )}
            </Routes>
          </Dashboard>
        ) : (
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route
              path="/forgot-password"
              element={<ForgotePossword></ForgotePossword>}
            ></Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;