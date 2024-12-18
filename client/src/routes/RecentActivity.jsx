import React from "react";

function RecentActivity() {
  return (
    <div className="Widget">
      <h1 className="widget-title">Recent activity</h1>
      <div className="widget-list">
        <div className="widget-item">
          <p>
            Dr Shloka Danave added two new conditions to your pulmonary health
            record regarding your recent symptoms
          </p>
        </div>
        <div className="widget-item">
          <p>
            Dr Anand Jasani has confirmed your appointment for Thursday 28
            April, 2022 at 2:20pm - 3:35pm
          </p>
        </div>
        <div className="widget-item">
          <p> Stephen An (Medicare) has sent a benefit of $174.99</p>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
