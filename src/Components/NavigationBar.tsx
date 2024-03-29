import React from "react";
import { Link } from "react-router-dom";
import "../Components/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";

export function NavigationBar() {
  return (
    <>
      <ul>
        <li className="dropdown">
          {" "}
          <FontAwesomeIcon icon={faBars} className="icon" /> Menu
          <ul className="dropdown-content">
            <li>
              {" "}
              <Link to="login">
                {" "}
                <FontAwesomeIcon icon={faUser} className="icon" /> Login
              </Link>
            </li>
            <li>
              <Link to="WelcomeLoggedInUser">
                <FontAwesomeIcon icon={faDoorOpen} className="icon" /> Welcome
              </Link>
            </li>
            <li>
              <Link to="leave">
                <FontAwesomeIcon
                  icon={faPersonThroughWindow}
                  className="icon"
                />{" "}
                Leave Requests
              </Link>
            </li>
            <li>
              <Link to="passwordreset">
                <FontAwesomeIcon icon={faKey} className="icon" /> Password Reset
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="leave">Leave Requests</Link>
        </li>
        <li>
          <Link to="login">Login Page</Link>
        </li>
        <li>
          <Link to="passwordreset">Password Reset</Link>
        </li>
      </ul>
    </>
  );
}
