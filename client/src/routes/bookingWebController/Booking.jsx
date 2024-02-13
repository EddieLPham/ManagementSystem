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
    <div className="h-4/6">
      <h1 className="text-center text-3xl"> Booking</h1>
      <div>
        <table className="table-auto border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-500 p-3">Admin</th>
              <th className="border border-slate-500 p-3">Customer</th>
              <th className="border border-slate-500 p-3">Price</th>
              <th className="border border-slate-500 p-3">Appointment date</th>
              <th className="border border-slate-500 p-3">Status</th>
              <th className="border border-slate-500 p-3">isPaid?</th>
              <th className="border border-slate-500 p-3">
                <Link to="/newbooking">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    New Booking
                  </button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id} className="border border-slate-500 p-3">
                  <td className="border border-slate-500 p-3">
                    {item.admin && item.admin.name ? item.admin.name : "N/A"}
                  </td>
                  <td className="border border-slate-500 p-3">
                    {item.customer && item.customer.name
                      ? item.customer.name
                      : "N/A"}
                  </td>
                  <td className="border border-slate-500 p-3">
                    {item.ticketPrice}
                  </td>
                  <td className="border border-slate-500 p-3">
                    {item.appointmentDate}
                  </td>
                  <td className="border border-slate-500 p-3">{item.status}</td>
                  <td className="border border-slate-500 p-3">
                    {item.isPaid.toString()}
                  </td>
                  <td className="border border-slate-500 p-4 text-center">
                    <Link to={`/booking/${item._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                      </button>
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
