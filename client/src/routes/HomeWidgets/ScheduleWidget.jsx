import { defaults } from "autoprefixer";
import { useEffect, useState } from "react";

let url = "http://localhost:8080/api/";
function RecentSchedule() {
  const [scheduleData, setScheduleData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSchedule = await fetch(url + "bookings");
        if (responseSchedule.ok) {
          const jsonScheduleData = await responseSchedule.json();
          setScheduleData(jsonScheduleData);
        }
      } catch (error) {
        setError("Error fetching data. Please try again later");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="Widget">
      <h2 className="widget-title">Schedule</h2>
      <div className="widget-list">
        {scheduleData.slice(0, 4).map((schedule) => {
          return (
            <div className="widget-item" key={schedule._id}>
              <p>{schedule.customer.name}</p>
              <p>{schedule.admin.name}</p>
              <p>{schedule.appointmentDate.slice(0, 10)}</p>
              <p>{schedule.ticketPrice}</p>
              <p>{schedule.updatedAt.slice(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RecentSchedule;
