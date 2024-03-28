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
import { PageNotFoundPage } from "./pages/PageNotFound";
import { LeavesPage} from "./pages/LeavesPage"

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="home" element={<WelcomeLoggedInUser></WelcomeLoggedInUser>}></Route>
        <Route path="leave" element={<LeavesPage></LeavesPage>}></Route>
        <Route path="/" element={<WelcomeLoggedInUser></WelcomeLoggedInUser>}></Route>
        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>

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