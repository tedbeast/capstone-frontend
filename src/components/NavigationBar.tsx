import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

export function NavigationBar() {
    return (<>
    <ul>
        <li><Link to="login">Home Page</Link></li>
    </ul>
    </>);
}