import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ViewUser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const baseUrl = `http://localhost:8080/api/users/${userId}`;
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("customer"); // Default role
  const [submitted, setSubmitted] = useState("");
  const fetchdata = async () => {
    try {
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUser(data._id);
      setEmail(data.email);
      setPassword(data.password);
      setName(data.name);
      setPhone(data.phone);
      setRole(data.role);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const editUser = async (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send a request to update user data
    try {
      const response = await fetch(baseUrl, {
        method: "PUT", // or 'PATCH' depending on your backend API
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
        throw new Error("Failed to update user data");
      }
      setSubmitted(true);
      // Optionally, you can navigate to another page after successful submission
    } catch (error) {
      console.error(error);
    }
  };
  const deleteUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseUrl, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      console.log("User Removed");
      navigate("/user");
    } catch (error) {}
  };

  return (
    <div className="">
      <h1 className="">View User</h1>
      {submitted ? (
        <div>
          <h1>Data updated successfully!!</h1>
          <Link to="/employee">Return to list</Link>
        </div>
      ) : (
        <form onSubmit={editUser}>
          <label
            htmlFor="user"
            className="block text-sm font-medium text-gray-600"
          >
            User:
          </label>
          <label
            type="text"
            className="mt-4 p-1 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            {user}
          </label>
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
              type="password"
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
              id="role"
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
            Submit
          </button>

          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={deleteUser}
          >
            Remove User
          </button>
        </form>
      )}
    </div>
  );
};

export default ViewUser;
