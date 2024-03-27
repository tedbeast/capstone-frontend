import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export function NavigationBar() {
  return (
    <>
      <ul>
        <li>
          <Link to="home">Home Page</Link>
        </li>
        <li>
          <Link to="Goals">Goals Page</Link>
        </li>
      </ul>
    </>
  );
}
