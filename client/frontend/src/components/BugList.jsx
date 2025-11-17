import BugItem from "./BugItem";

export default function BugList({ bugs }) {
  if (!bugs || bugs.length === 0) {
    return <p className="text-gray-500">No bugs reported yet.</p>;
  }

  return (
    <div className="flex flex-col">
      {bugs.map((bug) => (
        <BugItem key={bug._id} bug={bug} />
      ))}
    </div>
  );
}
