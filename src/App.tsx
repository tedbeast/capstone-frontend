import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./Pages/LoginPage";
// import { Homepage } from './Pages/Homepage'
import { LeavesPage } from "./Pages/LeavesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoalsPage } from "./Pages/GoalsPage";
import { NavigationBar } from "./Components/NavigationBar";
import { PageNotFoundPage } from "./Pages/PageNotFoundPage";
import { AdminPage } from "./Pages/AdminPage";
import { ReportingPage } from "./Pages/ReportingPage";
import { PasswordResetPage } from './Pages/PasswordResetPage';
import { WelcomeLoggedInUser } from './Pages/WelcomeLoggedInUser';
import { Employee } from "./Models/Employee";
import { Roles } from "./Models/Roles";
import "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const sampleEmployee: Employee = {
    employeeID: 1,
    password: "examplePassword",
    name: "DJ Developer",
    jobTitle: "Software Developer",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4",
    city: "Anytown",
    state: "Anystate",
    postalCode: "12345",
    birthDate: new Date("1990-01-01"), // or "1990-01-01" if you're using string dates
    anniversary: new Date("2015-06-01"),
    role: Roles.MANAGER,
    manager: {
      managerID: null,
      employees: []
    },
    performanceReview: [],
    leaves: []
  };

  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          {/* <Route path="/home" element={<WelcomeLoggedInUser></WelcomeLoggedInUser>}></Route> */}
          <Route
            path="/"
            element={<LoginPage></LoginPage>}
          ></Route>
          <Route
            path="*"
            element={<PageNotFoundPage></PageNotFoundPage>}
          ></Route>

          {/* <Route path="" element={<Homepage/>} /> */}

          <Route path="/welcome" element={<WelcomeLoggedInUser />} />
          <Route path="/passwordreset" element={<PasswordResetPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
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
          <Route
            path="leave"
            element={<LeavesPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
