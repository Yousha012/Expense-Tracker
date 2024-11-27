import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
// import { Balance } from "./Balance";

export const AddTransection = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("0");
  // console.log(amount)
  // console.log(text)

  const { addTransection } = useContext(GlobalContext);

  const { transections } = useContext(GlobalContext);
  const amounts = transections.map((transection) => transection.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  // console.log(total)
  // const con = (amount > total);
  // const condi = (amount.includes("-"))
  // const tru = (condi === true)
  // // const fal = (condi === )
  // const condition =  (con === condi)
  // console.log("con", con)
  // console.log("condi", condi)
  // console.log("true",tru)
  // console.log("conditon", condition)

  const handleTextChange = (e) => {
    const value = e.target.value;

    // Allow only text, no numbers
    // if (/^[a-zA-Z\s]*$/.test(value)) {
    setText(value);
    // }
  };

  // Handle keypress to block numbers in text input
  const handleTextKeyPress = (e) => {
    // Block numbers
    if (/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!text || !amount) {
      alert("Please fill in both the text and amount fields.");
      return; // Prevent form submission
    }

    const newTransection = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: +amount,
    };

    if (amount.includes("-")) {
      const positiveAmount = amount * -1;
      console.log(positiveAmount);
      if (positiveAmount > total) {
        alert("Insufficent balance");
        return;
      }
    }


    addTransection(newTransection);
    // console.log("addTransection", addTransection);

    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add New Transections</h3>
      <form onSubmit={onSubmit}>
        <div className="form-controler">
          <label htmlFor="text">Text</label>
          <br />
          <input
            type="text"
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleTextKeyPress}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-controler">
          <label htmlFor="amount">
            Amount <br /> (nagetive - expense, positive - income)
          </label>
          <br />
          <input
            className="input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add Transection</button>
      </form>
    </div>
  );
};
