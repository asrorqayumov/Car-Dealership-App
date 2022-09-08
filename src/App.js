import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/reducers/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter.data}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
