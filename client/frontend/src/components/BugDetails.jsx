import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function BugDetails() {
  const { id } = useParams();
  const [bug, setBug] = useState(null);

  useEffect(() => {
    const fetchBug = async () => {
      try {
        const res = await api.get(`/bugs/${id}`);
        setBug(res.data);
      } catch (err) {
        console.error("Error fetching bug details:", err);
      }
    };

    fetchBug();
  }, [id]);

  if (!bug) return <p className="p-6">Loading bug details...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{bug.title}</h1>
      <p className="text-gray-700 mb-2">{bug.description}</p>
      <p className="font-medium">Status: {bug.status}</p>
    </div>
  );
}
