import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/Auth/AuthContext";

const Login = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errorMassage, setErrorMassage] = useState("")

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
      setSuccess(true)
    }).catch(error => {
      console.log(error);
      setError(true)
      setErrorMassage(error.code)
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
          {
            success&& <p className="text-green-500">user logged in successfully</p>
          }
          {
            error && <p className="text-red-500">{errorMassage}</p>
          }
        </form>
        <p>new in this site? please <Link className="text-blue-400 underline" to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
