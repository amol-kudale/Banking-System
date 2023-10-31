import React from "react";

export default function User(props) {
  const cur = new Intl.NumberFormat("en-IN").format(props.bal);

  return (
    <div>
      <div className="user">
        <div className="username">{props.username}</div>
        <div className="email">{props.email}</div>
        <div className="acc">{props.acc}</div>
        <div className="bal">₹{cur}</div>
      </div>
    </div>
  );
}
