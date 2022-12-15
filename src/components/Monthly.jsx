import React from "react";

const Monthly = () => {
  return (
    <div className="monthly">
      <h2 className="monthly__heading">Monthly Subscription</h2>
      <p className="monthly__price">
        <span>$29</span> per month
      </p>
      <p className="monthly__access">Full access for less than $1 a day</p>
      <button className="monthly__signup">Sign Up</button>
    </div>
  );
};

export default Monthly;
