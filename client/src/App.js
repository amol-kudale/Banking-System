import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Transactions from "./pages/Transactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
