import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from './Pages/LoginPage'
import { Homepage } from './Pages/Homepage'
import { LeavesPage } from "./Pages/LeavesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoalsPage } from "./Pages/GoalsPage";
import { NavigationBar } from "./Components/NavigationBar";
import { PageNotFoundPage } from "./Pages/PageNotFoundPage";
import { AdminPage } from "./Pages/AdminPage";
import { ReportingPage } from "./Pages/ReportingPage";
import { PasswordResetPage } from './Pages/PasswordResetPage';
import { WelcomeLoggedInUser } from './Pages/WelcomeLoggedInUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />

          <Route path="/home" element={<WelcomeLoggedInUser></WelcomeLoggedInUser>}></Route>
          <Route path="/" element={<WelcomeLoggedInUser></WelcomeLoggedInUser>}></Route>
          <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>

          <Route path="" element={<Homepage/>} />

          <Route path="/welcome" element={<WelcomeLoggedInUser/>} />
          <Route path="/passwordreset" element={<PasswordResetPage/>} />
          <Route path="*" element={<PageNotFoundPage/>} />
          <Route path="admin" element={<AdminPage></AdminPage>}></Route>
          <Route
            path="*"
            element={<PageNotFoundPage></PageNotFoundPage>}
          ></Route>
          <Route path="Goals" element={<GoalsPage></GoalsPage>}></Route>
          <Route
            path="reporting"
            element={<ReportingPage></ReportingPage>}
          ></Route>
          <Route path="leave" element={<LeavesPage></LeavesPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;