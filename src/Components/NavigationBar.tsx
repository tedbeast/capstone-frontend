import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export function NavigationBar() {
  return (
    <>
      <ul>
        <li>
          <Link to="Home">Home Page</Link>
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
      </ul>
    </>
  );
}
