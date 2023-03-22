import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // Ambas opciones son viables, en algunos casos será mejor utilizar el caso de función
    // setCounter(counter + 1);
    setCounter((counter) => counter + 5);
  };

  const handleSubtract = ()=>{
    setCounter(counter - 1);
  };

  const handleReset = ()=>{
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+ 1 </button>
      <button onClick={handleSubtract}> - 1 </button>
      <button onClick={handleReset}> Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
