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
    <div className="">
      <h2 className="">Create Booking</h2>
      {submitted ? (
        <h1>Created new booking Successfully</h1>
      ) : (
        <form onSubmit={createBooking} className="">
          <div className="">
            <label className="">Admin:</label>
            <select
              name="admin"
              value={bookingData.admin}
              onChange={handleChange}
              className=""
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

          <div className="">
            <label htmlFor="customer" className="">
              User:
            </label>
            <select
              name="customer"
              value={bookingData.customer}
              onChange={handleChange}
              className=""
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

          <div className="">
            <label htmlFor="ticketPrice" className="">
              Ticket Price:
            </label>
            <input
              type="text"
              name="ticketPrice"
              value={bookingData.ticketPrice}
              onChange={handleChange}
              className=""
            />
          </div>

          <div className="mb-4">
            <label htmlFor="appointmentDate" className="">
              Appointment Date:
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={bookingData.appointmentDate}
              onChange={handleChange}
              className=""
            />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="">
              Status:
            </label>
            <select
              name="status"
              value={bookingData.status}
              onChange={handleChange}
              className=""
            >
              <option value="pending">Pending</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="isPaid" className="">
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

          <button type="submit" className="">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default NewBooking;
