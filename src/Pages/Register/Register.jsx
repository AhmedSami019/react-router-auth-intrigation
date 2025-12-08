// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/Auth/AuthContext";
// import { auth } from "../../firebase.init";

const Register = () => {

  const {createUser} = useContext(AuthContext)

    const [success, setSuccess] = useState(false)

    // this is for navigation
    const navigate = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);
        setSuccess(false)

        // firebase works for authentication
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     console.log(result);
        //     setSuccess(true)
        // }).catch(error => {
        //     console.log(error);
        // })

        // create user with Context and firebase
        createUser(email, password)
        .then(result => {
          console.log(result);
          navigate("/")
        }).catch(error => {
          console.log(error.code);
        })
    }

  return (
    <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Your name" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          Already have an account? please{" "}
          <Link className="text-blue-400 underline" to="/login">
            Login
          </Link>
        </p>
        {
            success && <p className="text-green-500">user has created successfully</p>
        }
      </div>
    </div>
  );
};

export default Register;
