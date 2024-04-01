import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { LeavesPage } from "./Pages/LeavesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoalsPage } from "./Pages/GoalsPage";
import { NavigationBar } from "./Components/NavBar";
import { PageNotFoundPage } from "./Pages/PageNotFoundPage";
import { AdminPage } from "./Pages/AdminPage";
import { WelcomePage } from "./Pages/WelcomePage";
import { ReportingPage } from "./Pages/ReportingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="home" element={<WelcomePage></WelcomePage>}></Route>
          <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
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
