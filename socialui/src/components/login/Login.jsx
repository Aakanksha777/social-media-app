import { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {

  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const formSubmit = (e) => {
    e.preventDefault();
    loginCall({email:email.current.value, password:password.current.value}, dispatch)
  }

  console.log("user", user)
  return (
    <>
    <div className="login">

    <h1 className="login-header">Social App</h1>
          <form className="loginBox" onSubmit={formSubmit}>
            <input placeholder="Email" className="loginInput" ref={email} required type="email"/>
            <input placeholder="Password" className="loginInput" ref={password} required type="password"/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
        </form>
    </div>
    </>
  );
}