import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(0);
  return (
    <div className="App">
      <h2 className={counter < 0 ? "red" : "blue"}>{counter}</h2>
      <button onClick={() => setcounter(counter + 1)}>Aumentar</button>
      <button onClick={() => setcounter(counter - 1)}>Disminuir</button>
    </div>
  );
}

export default App;
