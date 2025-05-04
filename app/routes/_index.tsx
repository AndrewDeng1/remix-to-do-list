import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Welcome to your To-Do App</h2>
      <div className="space-x-4">
        <Link
          to="/signup"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Login
        </Link>
      </div>
    </div>
  );
}