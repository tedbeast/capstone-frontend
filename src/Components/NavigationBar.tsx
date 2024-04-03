import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../Components/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faBars,
  faChartColumn,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/HR (7).png";
import { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function NavigationBar() {
  const [useState] = React.useState(false);
  return (
    <>
      <div id="header">
        <Link id="login-link" to={useState ? "/WelcomeLoggedInUser" : "/Login"}>
          <img src={logo} alt="Logo" id="header-logo" />
        </Link>

        <div id="nav-container">
          <ul id="nav">
            <li className="dropdown">
              {" "}
              <FontAwesomeIcon icon={faUser} className="icon" /> My Account{" "}
              <ul className="dropdown-content">
                <li>
                  {" "}
                  <Link to="login">
                    {" "}
                    <FontAwesomeIcon
                      icon={faDoorOpen}
                      className="icon"
                    /> Login{" "}
                  </Link>
                </li>

                <li>
                  <Link to="passwordreset">
                    <FontAwesomeIcon icon={faKey} className="icon" /> Password
                    Reset
                  </Link>
                </li>

                <li>
                  <Link to="login">
                    <FontAwesomeIcon icon={faDoorClosed} className="icon" />{" "}
                    Logout
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              {" "}
              Leave{" "}
              <ul className="dropdown-content">
                <li>
                  <Link to="leave">
                    <FontAwesomeIcon
                      icon={faPersonThroughWindow}
                      className="icon"
                    />{" "}
                    Leave Requests{" "}
                  </Link>{" "}
                </li>
              </ul>
            </li>

            <li className="dropdown">
              {" "}
              Performance{" "}
              <ul className="dropdown-content">
                <li>
                  <Link to="Goals">
                    <FontAwesomeIcon icon={faStar} className="icon" /> Goals{" "}
                  </Link>{" "}
                </li>
              </ul>
            </li>

            <li className="dropdown">
              {" "}
              Administrative{" "}
              <ul className="dropdown-content">
                <li>
                  <Link to="AdminPage">
                    <FontAwesomeIcon icon={faUserTie} className="icon" /> Admin
                    Page{" "}
                  </Link>{" "}
                </li>
                <li>
                  <Link to="Reporting">
                    <FontAwesomeIcon icon={faChartColumn} className="icon" />{" "}
                    Reporting{" "}
                  </Link>{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* <ul id="nav">
        <li className="dropdown">
          {" "}
          <FontAwesomeIcon icon={faUser} className="icon" /> My Account{" "}
          <ul className="dropdown-content">
            <li>
              {" "}
              <Link to="login">
                {" "}
                <FontAwesomeIcon
                  icon={faDoorOpen}
                  className="icon"
                /> Login{" "}
              </Link>
            </li>

            {// <li><Link to="WelcomeLoggedInUser"><FontAwesomeIcon icon={faUser} className="icon" /> Welcome</Link></li>}

            <li>
              <Link to="leave">
                <FontAwesomeIcon
                  icon={faPersonThroughWindow}
                  className="icon"
                />{" "}
                Leave Requests{" "}
              </Link>{" "}
            </li>

            <li>
              <Link to="passwordreset">
                <FontAwesomeIcon icon={faKey} className="icon" /> Password Reset
              </Link>
            </li>

            <li>
              <Link to="logout">
                <FontAwesomeIcon icon={faDoorClosed} className="icon" /> Logout
              </Link>
            </li>
          </ul>
        </li>
        <li className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </li>
        <li>
          <Link to="leave">Leave Requests</Link>
        </li>
        <li>
          <Link to="Leave">Leave Page</Link>
        </li>
        <li>
          <Link to="Goals">Goals Page</Link>
        </li>
        <li>
          <Link to="Admin">Admin Page</Link>
        </li>
        <li>
          <Link to="Reporting">Reporting Page</Link>
        </li>

        //{<li>
          //<Link to="login">Login Page</Link>
        //</li>
        //<li>
          //<Link to="passwordreset">Password Reset</Link>
        //</li> }
      </ul> */}
    </>
  );
}
