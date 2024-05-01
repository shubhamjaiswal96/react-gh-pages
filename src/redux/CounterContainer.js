import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./actions"; // Import action creators

function CounterContainer() {
  const countValue = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  return (
    <div>
      <h2>CounterContainer</h2>
      <h4>Count: {countValue} </h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterContainer;
