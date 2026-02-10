import React, { useState } from "react";

const Flames = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    // Blank input check
    if (name1.trim() === "" || name2.trim() === "") {
      setResult("Please Enter valid input");
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    // Remove common letters (case-sensitive)
    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1[i] = "";
        arr2[index] = "";
      }
    }

    let remainingLength =
      arr1.join("").length + arr2.join("").length;

    let mod = remainingLength % 6;

    if (mod === 1) {
      setResult("Friends");
    } else if (mod === 2) {
      setResult("Love");
    } else if (mod === 3) {
      setResult("Affection");
    } else if (mod === 4) {
      setResult("Marriage");
    } else if (mod === 5) {
      setResult("Enemy");
    } else {
      setResult("Siblings");
    }
  };

  const clear = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id="main">
      <input
        type="text"
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />

      <input
        type="text"
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculate}
      >
        Calculate Relationship Future
      </button>

      <button
        data-testid="clear"
        name="clear"
        onClick={clear}
      >
        Clear
      </button>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default Flames;
