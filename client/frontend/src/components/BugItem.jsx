import { Link } from "react-router-dom";

export default function BugItem({ bug }) {
  return (
    <Link to={`/bugs/${bug._id}`}>
      <div className="border p-4 rounded-md mb-3 shadow-sm hover:shadow-md transition cursor-pointer">
        <h2 className="text-xl font-semibold">{bug.title}</h2>
        <p className="text-gray-600">{bug.description}</p>
        <p className="text-sm mt-1">
          Status: <span className="font-medium">{bug.status}</span>
        </p>
      </div>
    </Link>
  );
}
