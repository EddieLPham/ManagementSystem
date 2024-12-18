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
    <div className="">
      <h1 className=""> List of users</h1>
      <Link to="/newuser">
        <button className="">Add new employee</button>
      </Link>

      <div>
        {data.map((item) => {
          return (
            <table className="">
              <thead>
                <tr>
                  <th className=""># </th>
                  <th className="">Name </th>
                  <th className="">Email </th>
                  <th className="">Phone Number</th>
                  <th className="">Role </th>
                </tr>
              </thead>
              <tbody>
                <tr key={item._id} className="">
                  <td className="">{item._id.substring(0, 10)}</td>
                  <td className="">{item.name}</td>
                  <td className="">{item.email}</td>
                  <td className="">{item.phone}</td>
                  <td className="">{item.role}</td>
                  <td className=" text-center">
                    <Link to={`/user/${item._id}`}>
                      <button className="">Edit</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
}
export default User;
