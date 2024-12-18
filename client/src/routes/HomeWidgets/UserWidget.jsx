import { useEffect, useState } from "react";
let url = "http://localhost:8080/api/";
function RecentUser() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUser = await fetch(url + "users");
        const jsonUserData = await responseUser.json();
        if (responseUser.ok) {
          setUserData(jsonUserData);
        }
      } catch (error) {
        setError("Error fetching data. Please try again.");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="Widget">
      <h1 className="">Users</h1>
      {userData.slice(0, 2).map((user) => {
        return (
          <div className="" key={user._id}>
            <p>{user._id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}
export default RecentUser;
