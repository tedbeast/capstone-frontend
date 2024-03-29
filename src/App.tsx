import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage'
import { Homepage } from './Pages/Homepage'
import { NavigationBar } from './Components/NavigationBar';
import { PasswordResetPage } from './Pages/PasswordResetPage';
import { WelcomeLoggedInUser } from './Pages/WelcomeLoggedInUser';
import { PageNotFoundPage } from "./Pages/PageNotFound";
import { LeavesPage} from "./Pages/LeavesPage"

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />

        <Route path="/home" element={<WelcomeLoggedInUser></WelcomeLoggedInUser>}></Route>
        <Route path="/leave" element={<LeavesPage></LeavesPage>}></Route>
        <Route path="/" element={<WelcomeLoggedInUser></WelcomeLoggedInUser>}></Route>
        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>

      <Route path="" element={<Homepage/>} />

      <Route path="/welcome" element={<WelcomeLoggedInUser/>} />
      <Route path="/passwordreset" element={<PasswordResetPage/>} />
      <Route path="*" element={<PageNotFoundPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;