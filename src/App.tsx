import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage'
import { NavigationBar } from './Components/NavigationBar';
import { PasswordResetPage } from './Pages/PasswordResetPage';
import { WelcomeLoggedInUser } from './Pages/WelcomeLoggedInUser';
import { PageNotFoundPage } from './Pages/PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="" element={<LoginPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/welcome" element={<WelcomeLoggedInUser/>} />
      <Route path="/passwordreset" element={<PasswordResetPage/>} />
      <Route path="*" element={<PageNotFoundPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;