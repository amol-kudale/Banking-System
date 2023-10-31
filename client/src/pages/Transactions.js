import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Record from "../components/Record";

export default function Transactions() {
  const [form, setForm] = useState(false);
  const [transactions, viewTransactions] = useState(false);

  const [ele, setEle] = useState([]);

  useEffect(() => {
    getEle();
  }, []);

  async function getEle() {
    const res = await fetch(`http://localhost:4000/transactions`);
    const { data } = await res.json();
    setEle(data);
  }

  function handleClick() {
    setForm(!form);
  }
  function handleClick2() {
    viewTransactions(!transactions);
  }

  function displayTran(ele) {
    return (
      <Record
        username={ele.username}
        acc={ele.accNumber}
        amount={ele.amount}
        Date={ele.Date}
      />
    );
  }

  return (
    <>
      <div className="transactions">
        <div className="back"></div>
        <div className="trans-intro">
          <h1>Transactions Made Simple</h1>
        </div>
        <button className="left-btn btn" onClick={handleClick}>
          Make a Transaction
        </button>
        <button className="btn" onClick={handleClick2}>
          View all transactions
        </button>
        {form && <Form />}
      </div>

      {transactions && (
        <>
          <>
            <div>
              <div className="record">
                <div className="name ml">Username</div>
                <div className="acc ml">Account Number</div>
                <div className="amount ml">Transaction Amount</div>
                <div className="date ml">Date</div>
              </div>
            </div>
          </>
          {ele.map(displayTran)}
        </>
      )}
    </>
  );
}
