import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const url = "http://localhost:8080/api/users";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        }
      } catch (error) {
        setError("Error fetching data. Please try again later");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="h-4/6">
      <h1 className="text-center text-3xl"> List of users</h1>
      <div>
        <table className="table-auto border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-500 p-3"># </th>
              <th className="border border-slate-500 p-3">Name </th>
              <th className="border border-slate-500 p-3">Email </th>
              <th className="border border-slate-500 p-3">Phone Number</th>
              <th className="border border-slate-500 p-3">Role </th>
              <th className="border border-slate-500 p-3">
                <Link to="/newuser">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add new employee
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
                    {item._id.substring(0, 10)}
                  </td>
                  <td className="border border-slate-500 p-3">{item.name}</td>
                  <td className="border border-slate-500 p-3">{item.email}</td>
                  <td className="border border-slate-500 p-3">{item.phone}</td>
                  <td className="border border-slate-500 p-3">{item.role}</td>
                  <td className="border border-slate-500 p-4 text-center">
                    <Link to={`/user/${item._id}`}>
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
export default User;
