import React, { useEffect, useState } from "react";

function NewBooking() {
  const userUrl = "http://localhost:8080/api/users";
  const bookingUrl = "http://localhost:8080/api/bookings";
  const [submitted, setSubmitted] = useState("");

  const [users, setUsers] = useState([]);
  const [bookingData, setBookingData] = useState({
    admin: "",
    customer: "",
    ticketPrice: "",
    appointmentDate: "",
    status: "pending",
    isPaid: true,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(userUrl);
        if (response.ok) {
          const userData = await response.json();
          setUsers(userData);
        }
      } catch (error) {
        console.error("Failed to fetch users");
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const createBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(bookingUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          admin: bookingData.admin,
          customer: bookingData.customer,
          ticketPrice: bookingData.ticketPrice,
          appointmentDate: bookingData.appointmentDate,
          status: bookingData.status,
          isPaid: bookingData.isPaid,
        }),
      });
      if (response) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error creating booking", error);
    }
    console.log("Booking Data:", bookingData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md w-1/3">
      <h2 className="text-2xl font-bold mb-4">Create Booking</h2>
      {submitted ? (
        <h1>Created new booking Successfully</h1>
      ) : (
        <form onSubmit={createBooking} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Admin:
            </label>
            <select
              name="admin"
              value={bookingData.admin}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              {users
                .filter((admin) => admin.role === "admin")
                .map((admin) => (
                  <option key={admin._id} value={admin._id}>
                    {admin.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="customer"
              className="block text-sm font-medium text-gray-600"
            >
              User:
            </label>
            <select
              name="customer"
              value={bookingData.customer}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              {users
                .filter((customer) => customer.role === "customer")
                .map((customer) => (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="ticketPrice"
              className="block text-sm font-medium text-gray-600"
            >
              Ticket Price:
            </label>
            <input
              type="text"
              name="ticketPrice"
              value={bookingData.ticketPrice}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="appointmentDate"
              className="block text-sm font-medium text-gray-600"
            >
              Appointment Date:
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={bookingData.appointmentDate}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-600"
            >
              Status:
            </label>
            <select
              name="status"
              value={bookingData.status}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="pending">Pending</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="isPaid"
              className="block text-sm font-medium text-gray-600"
            >
              Is Paid:
            </label>
            <input
              type="checkbox"
              name="isPaid"
              checked={bookingData.isPaid}
              onChange={() =>
                setBookingData((prevData) => ({
                  ...prevData,
                  isPaid: !prevData.isPaid,
                }))
              }
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default NewBooking;
