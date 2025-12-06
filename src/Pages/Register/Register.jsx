import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          Already have an account? please{" "}
          <Link className="text-blue-400 underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
