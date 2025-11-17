import { useNavigate } from "react-router-dom";
import BugForm from "./BugForm";
import api from "../api/axios";

export default function CreateBug() {
  const navigate = useNavigate();

  const handleSubmit = async (bugData) => {
    try {
      await api.post("/bugs", bugData);
      navigate("/bugs"); // go to bug list after submission
    } catch (err) {
      console.error("Error creating bug:", err);
      alert("Failed to create bug. Check console for details.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Create a Bug</h1>
      <BugForm onSubmit={handleSubmit} />
    </div>
  );
}
