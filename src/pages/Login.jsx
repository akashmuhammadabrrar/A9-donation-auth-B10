import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-xl text-center font-bold">Login Your Account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
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
            <button className="btn btn-accent">Login</button>
          </div>
          <p className="font-bold text-center p-2">
            Don't Have An Account?{" "}
            <Link to="/auth/register">
              <span className="text-blue-600">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
