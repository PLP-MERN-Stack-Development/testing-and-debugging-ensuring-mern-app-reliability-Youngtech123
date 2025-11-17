import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Bugs from "./components/Bugs";
import CreateBug from "./components/CreateBug";
import BugDetails from "./components/BugDetails";

export default function App() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/bugs/create" element={<CreateBug />} />
        <Route path="/bugs/:id" element={<BugDetails />} />
      </Routes>
    </div>
  );
}
