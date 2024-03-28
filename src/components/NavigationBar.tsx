import React from "react";
import { Link } from "react-router-dom";
import '../components/Nav.css';

export function NavigationBar() {
    return (<>
    <ul>
        <li><Link to="home">Home Page</Link></li>
        <li><Link to="leave">Leave Page</Link></li>
    </ul>
    </>);
}