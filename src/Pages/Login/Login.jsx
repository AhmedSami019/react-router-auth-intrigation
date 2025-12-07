import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/Auth/AuthContext";

const Login = () => {

  // import signInUser form authProvider
  const {signInUser} = use(AuthContext)

  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password);

    signInUser(email, password)
    .then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>new in this site? please <Link className="text-blue-400 underline" to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
