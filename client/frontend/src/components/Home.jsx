import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-4">Bug Tracking System</h1>

      <p className="text-gray-600 max-w-md mb-8">
        A simple and efficient tool to create, track, and manage software bugs.
      </p>

      <div className="flex gap-4">
        <Link
          to="/bugs"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Bugs
        </Link>

        <Link
          to="/bugs/create"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Create Bug
        </Link>
      </div>
    </div>
  );
}
