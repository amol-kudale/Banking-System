import React from "react";

export default function Record(props) {
  const cur = new Intl.NumberFormat("en-IN").format(props.amount);
  return (
    <div>
      <div className="record">
        <div className="name ml">{props.username}</div>
        <div className="acc ml">{props.acc}</div>
        <div className="amount ml">₹{cur}</div>
        <div className="date ml">{props.Date}</div>
      </div>
    </div>
  );
}
