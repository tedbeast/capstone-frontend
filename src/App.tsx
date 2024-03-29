import React from 'react';
import './App.css';
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


      <Route path="" element={<LoginPage/>} />
      <Route path="/login" element={<LoginPage/>} />
        <Route path="home" element={<LoginPage></LoginPage>}></Route>

      <Route path="/welcome" element={<WelcomeLoggedInUser/>} />
        <Route path="/" element={<WelcomeLoggedInUser></WelcomeLoggedInUser>}></Route>


      <Route path="/passwordreset" element={<PasswordResetPage/>} />

        <Route path="leave" element={<LeavesPage></LeavesPage>}></Route>

        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;