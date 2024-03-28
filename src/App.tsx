import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PageNotFoundPage } from "./Pages/PageNotFound";
import { WelcomePage } from "./Pages/WelcomePage";
import { LeavesPage} from "./Pages/LeavesPage"
import { NavigationBar } from "./Components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoalsPage } from "./Pages/GoalsPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="home" element={<WelcomePage></WelcomePage>}></Route> 
        <Route path="leave" element={<LeavesPage></LeavesPage>}></Route> 
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
        <Route path='Goals' element={<GoalsPage></GoalsPage>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;