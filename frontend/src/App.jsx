import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ManageRecords from "./pages/ManageRecords";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<ManageRecords />} />
      </Routes>
    </Router>
  );
}
export default App;
