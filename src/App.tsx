import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage'
import { Homepage } from './pages/Homepage'
import { NavigationBar } from './components/NavigationBar';
import { PasswordResetPage } from './pages/PasswordResetPage';
import { WelcomeLoggedInUser } from './pages/WelcomeLoggedInUser';
import { PageNotFoundPage } from './pages/PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Route path="" component={Homepage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/welcome" component={WelcomeLoggedInUser} />
      <Route path="/passwordreset" component={PasswordResetPage} />
      <Route path="*" component={PageNotFoundPage} />
    </BrowserRouter>
    </>
  );
}

export default App;