import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Booking() {
  const url = `http://localhost:8080/api/bookings`;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        }
      } catch (error) {
        setError("Error fetching data, try again!");
      }
    };
    fetchBookings();
  }, []);
  return (
    <div className="">
      <h1 className=""> Booking</h1>
      <div>
        <table className="">
          <thead>
            <tr>
              <th className="">Admin</th>
              <th className="">Customer</th>
              <th className="">Price</th>
              <th className="">Appointment date</th>
              <th className="">Status</th>
              <th className="">isPaid?</th>
              <th className="">
                <Link to="/newbooking">
                  <button className="">New Booking</button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id} className="">
                  <td className="">
                    {item.admin && item.admin.name ? item.admin.name : "N/A"}
                  </td>
                  <td className="">
                    {item.customer && item.customer.name
                      ? item.customer.name
                      : "N/A"}
                  </td>
                  <td className="">{item.ticketPrice}</td>
                  <td className="">{item.appointmentDate.slice(0, 10)}</td>
                  <td className="">{item.status}</td>
                  <td className="">{item.isPaid.toString()}</td>
                  <td className="">
                    <Link to={`/booking/${item._id}`}>
                      <button className="">Edit</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;
