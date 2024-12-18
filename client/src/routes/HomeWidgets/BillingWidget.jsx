import React from "react";

function BillingWidget() {
  return (
    <div className="Widget">
      <h1 className="widget-title">BillingWidget</h1>
      <div className="widget-list">
        <div className="widget-item">
          <h4>Item 1</h4>
          <p>Cost: $140</p>
        </div>
        <div className="widget-item">
          <h4>Item 2</h4>
          <p>Cost: $250</p>
        </div>
        <div className="widget-item">
          <h4>Item 3</h4>
          <p>Cost: $540</p>
        </div>
      </div>
    </div>
  );
}

export default BillingWidget;
