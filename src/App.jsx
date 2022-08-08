import { Routes, Route } from "react-router-dom";
import Counter from "./components/counter";
import Post from "./components/Post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

export default App;
