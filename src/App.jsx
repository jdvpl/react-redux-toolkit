import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  increaseAmount,
  multiplication,
  divide,
} from "./redux/reducers/createSlice/counterSlices";

function App() {
  const [amount, setamount] = useState(5);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  const { value } = counter;
  return (
    <div className="App">
      <h2 className={value < 0 ? "red" : "blue"}>{value}</h2>
      <h3>Numero o dividir</h3>
      <input
        value={amount}
        type="number"
        onChange={(e) => setamount(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>Aumentar +1</button>
      <button onClick={() => dispatch(decrement())}>Disminuir -1</button>
      <button onClick={() => dispatch(increaseAmount(parseInt(amount, 10)))}>
        Aumentar {amount}
      </button>
      <button onClick={() => dispatch(multiplication(parseInt(amount, 10)))}>
        Multiplicar x {amount}
      </button>
      <button onClick={() => dispatch(divide(parseInt(amount, 10)))}>
        Dividir /{amount}
      </button>
    </div>
  );
}

export default App;
