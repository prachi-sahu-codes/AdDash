import { Routes, Route } from "react-router-dom";
import { DashBoard, CreateAd, MediaAd, TextAd } from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="app min-h-screen bg-bg-body">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/createAd" element={<CreateAd />} />
        <Route path="/mediaAd" element={<MediaAd />} />
        <Route path="/textAd" element={<TextAd />} />
      </Routes>
    </div>
  );
}

export default App;
