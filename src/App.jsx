import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  increaseAmount,
} from "./redux/slices/counterSlices";

function App() {
  const [amount, setamount] = useState(5);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  const { value } = counter;
  return (
    <div className="App">
      <h2 className={value < 0 ? "red" : "blue"}>{value}</h2>
      <button onClick={() => dispatch(increment())}>Aumentar</button>
      <button onClick={() => dispatch(decrement())}>Disminuir</button>
      <input
        value={amount}
        type="number"
        onChange={(e) => setamount(e.target.value)}
      />
      <button onClick={() => dispatch(increaseAmount(parseInt(amount, 10)))}>
        Aumentar {amount}
      </button>
    </div>
  );
}

export default App;
