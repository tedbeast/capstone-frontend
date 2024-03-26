import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage'
import { Homepage } from './pages/Homepage'

function App() {
  return (
    <>
    <BrowserRouter>
      <Route path="" component={Homepage} />
      <Route path="/login" component={LoginPage} />
    </BrowserRouter>
    </>
  );
}

export default App;