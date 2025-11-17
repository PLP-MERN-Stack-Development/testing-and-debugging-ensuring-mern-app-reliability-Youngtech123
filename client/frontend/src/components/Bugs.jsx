import { useEffect, useState } from "react";
import api from "../api/axios";
import BugList from "./BugList";

export default function Bugs() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const res = await api.get("/bugs"); // calls backend GET /api/bugs
        setBugs(res.data);
      } catch (err) {
        console.error("Error fetching bugs:", err);
      }
    };

    fetchBugs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Reported Bugs</h1>
      <BugList bugs={bugs} />
    </div>
  );
}
