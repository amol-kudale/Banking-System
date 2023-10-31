import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [form, setForm] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:4000/transactions`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      alert("Transaction done successfully");
      window.location.reload(true);
    } else {
      alert("Invalid Credentials");
      window.location.reload(true);
    }
  }

  return (
    <div className="make">
      <form method="post" action="/">
        <input
          type="text"
          name="username"
          value={form.username || ""}
          onChange={handleChange}
          placeholder="Enter receivers username"
        />
        <br />
        <input
          type="number"
          name="acc"
          value={form.acc || ""}
          onChange={handleChange}
          placeholder="Enter receivers account number"
        />
        <br />
        <input
          type="number"
          name="amount"
          value={form.amount || ""}
          onChange={handleChange}
          placeholder="Enter amount"
        />
        <br />
        <Link to="/users">
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </Link>
      </form>
    </div>
  );
}
