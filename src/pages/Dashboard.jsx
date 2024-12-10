import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.photoURL);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={user?.photoURL}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6">{user?.email}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
