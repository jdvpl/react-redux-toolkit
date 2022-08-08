import { Routes, Route } from "react-router-dom";
import Counter from "./components/counter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
    </Routes>
  );
}

export default App;
