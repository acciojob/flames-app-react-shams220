import React, { useState } from "react";

const Flames = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (name1, name2) => {
    
    let one = name1.toLowerCase();
    let second = name2.toLowerCase();
    let set1 = new Set(one);
    let set2 = new Set(second);
    let sizeSum = set1.size + set2.size;
    if(set1.size == 0 || set2.size == 0){
        setResult("Please Enter valid input")
return
    }

    // console.log("s1", set1.size);
    // console.log("s2", set2.size);

    let mod = Number(sizeSum) % 6;
    // console.log("size",sizeSum)
    // console.log("mod",mod)
    // console.log(set1)
    // console.log(set2)
    // console.log(one ,second)
    if (mod == 1) {
      setResult("Friends");
    }else if(mod == 2){
        setResult("Love")
    }else if(mod == 3){
        setResult("Affection")
    }else if(mod == 4){
        setResult("Marriage")
    }else if(mod == 5){
        setResult("Enemy")
    }else{
        setResult("Siblings");
    }
  };

  const clear=()=>{
    setName1("")
    setName2("")
    setResult("")
  }
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        id="input1"
        className="name1"
      />

      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        id="input2"
        className="name2"
      />

      <button
        className="calculate_relationship"
        id="calculate_relationship"
        onClick={() => calculate(name1, name2)}
      >
        Calculate Relationship Future
      </button>
      <button id="clear" className="clear" onClick={clear}>
        Clear
      </button>

      <h3 id="answer">{result}</h3>
    </div>
  );
};
export default Flames;
