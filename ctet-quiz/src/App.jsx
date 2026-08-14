import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import MockTest from "./Components/MockTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/quiz" element={<Quiz />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;