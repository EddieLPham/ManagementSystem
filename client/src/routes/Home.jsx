import RecentActivity from "./RecentActivity";
import BillingWidget from "./HomeWidgets/BillingWidget";
import RecentSchedule from "./HomeWidgets/ScheduleWidget";
import SessionWidget from "./HomeWidgets/SessionWidget";

function Home() {
  return (
    <div className="Home">
      <div className="Home-title">
        <h1> Management++ </h1>
        <p>
          This project is to create a management system that can be use to
          schedule either new employee or appointment
        </p>
      </div>
      <div className="Widgets">
        <SessionWidget />
        <RecentActivity />
        <RecentSchedule />
        <BillingWidget />
      </div>
    </div>
  );
}
export default Home;
