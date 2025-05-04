import { Form } from "@remix-run/react";

export default function Signup() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Sign Up</h2>
      <Form method="post" className="space-y-4">
        <div>
          <label className="block">Username</label>
          <input
            type="text"
            name="username"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
      </Form>
    </div>
  );
}