import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
