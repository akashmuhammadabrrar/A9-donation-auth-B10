import React from "react";
import { FaHeart } from "react-icons/fa";

const Status = () => {
  return (
    <div className="stats shadow w-full mx-auto relative bottom-3 ">
      <div className="stat">
        <div className="stat-figure text-primary">
          <FaHeart className="text-3xl text-red-600"></FaHeart>
        </div>
        <div className="stat-title ">Total Donation</div>
        <div className="stat-value text-accent">25.6K</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current text-accent">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div className="stat-title">Total Impacted</div>
        <div className="stat-value text-accent">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://i.ibb.co.com/ZcBzLSD/user.png" />
            </div>
          </div>
        </div>
        <div className="stat-value text-accent">46%</div>
        <div className="stat-title">Top Contributor</div>
        <div className="stat-desc text-accent">3 Division remaining</div>
      </div>
    </div>
  );
};

export default Status;
