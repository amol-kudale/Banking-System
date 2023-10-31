import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <Link to={"/"}>Keep Safe</Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
            <li>
              <Link to={"/transactions"}>Transactions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
