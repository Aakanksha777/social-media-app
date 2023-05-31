import "./Login.css";

export default function Login() {
  return (
    <>
    <div className="login">

    <h1 className="login-header">Social App</h1>
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
        </div>
    </div>
    </>
  );
}