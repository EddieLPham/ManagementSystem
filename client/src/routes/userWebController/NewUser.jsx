import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NewUser() {
  const navigate = useNavigate();
  const baseUrl = `http://localhost:8080/api/users`; // Adjust the URL accordingly
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("customer"); // Default role
  const [submitted, setSubmitted] = useState("");
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          phone,
          role,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create employee");
      }
      setSubmitted(true);

      console.log("Employee created successfully");
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md w-1/3">
      <h1 className="text-2xl font-bold mb-4">Create Employee</h1>
      {submitted ? (
        <div>
          <h1>Data Created successfully!!</h1>
          <Link to="/employee">Return to list </Link>
        </div>
      ) : (
        <form onSubmit={createUser}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone:
            </label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-600"
            >
              Role:
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Create Employee
          </button>
        </form>
      )}
    </div>
  );
}
export default NewUser;
