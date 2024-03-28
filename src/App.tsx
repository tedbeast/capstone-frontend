import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage'
import { Homepage } from './pages/Homepage'
import { NavigationBar } from './components/NavigationBar';
import { PasswordResetPage } from './pages/PasswordResetPage';
import { WelcomeLoggedInUser } from './pages/WelcomeLoggedInUser';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="" element={<Homepage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/welcome" element={<WelcomeLoggedInUser/>} />
      <Route path="/passwordreset" element={<PasswordResetPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;