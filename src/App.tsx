import React from "react";
import "./App.css";
import { PageNotFoundPage } from "./Pages/PageNotFound";
import { WelcomePage } from "./Pages/WelcomePage";
import { LeavesPage } from "./Pages/LeavesPage";
import { NavigationBar } from "./Components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Employee } from "./models/Employee";
import { Roles } from "./models/Roles";

function App() {
  const sampleEmployee: Employee = {
    employeeID: 1,
    password: null,
    role: Roles.MANAGER,
    name: "Jane Doe",
    jobTitle: "Senior Developer",
    phoneNumber: "555-1234",
    email: "jane.doe@example.com",
    addressLine1: "123 Elm Street",
    addressLine2: "",
    city: "Anytown",
    state: "Anystate",
    postalCode: "12345",
    birthDate: new Date("1990-01-01"), // or "1990-01-01" if you're using string dates
    anniversary: new Date("2015-06-01"), // or "2015-06-01" if you're using string dates
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
      </BrowserRouter>
    </>
  );
}

export default App;
