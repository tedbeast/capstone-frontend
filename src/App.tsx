import React from "react";
import "./App.css";
import { PageNotFoundPage } from "./Pages/PageNotFound";
import { WelcomePage } from "./Pages/WelcomePage";
import { LeavesPage } from "./Pages/LeavesPage";
import { NavigationBar } from "./Components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  };

  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="home" element={<WelcomePage></WelcomePage>}></Route>
          <Route
            path="leave"
            element={<LeavesPage employee={sampleEmployee} />}
          ></Route>
          <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
          <Route
            path="*"
            element={<PageNotFoundPage></PageNotFoundPage>}
          ></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
