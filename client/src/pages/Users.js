import React, { useState, useEffect } from "react";
import User from "../components/User.js";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    const res = await fetch(`http://localhost:4000/users`);
    const { userData } = await res.json();
    console.log(userData);
    setData(userData);
  }

  function displayData(ele) {
    return (
      <User
        username={ele.username}
        email={ele.email}
        acc={ele.acc}
        bal={ele.currentBalance}
      />
    );
  }

  return (
    <div className="user-con">
      <div className="user">
        <div className="username">Username</div>
        <div className="email">Email</div>
        <div className="acc">Account Number</div>
        <div className="bal">Balance</div>
      </div>
      <>{data.map(displayData)}</>
    </div>
  );
}
