import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
        <Route path="reporting" element={<ReportingPage></ReportingPage>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;