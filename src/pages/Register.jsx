import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form className="card-body">
          <h2 className="text-xl text-center font-bold">
            Register Your Account
          </h2>
          {/* Name input field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo url"
              className="input input-bordered"
              required
            />
          </div>
          {/* email input field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* password input field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Register</button>
          </div>
          <p className="font-bold text-center p-2">
            Already Have An Account ?{" "}
            <Link to="/auth/login">
              <span className="text-blue-600">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
