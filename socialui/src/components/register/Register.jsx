import "../login/Login.css";

export default function Register() {
  return (
    <div className="login">

    <h1 className="login-header">Signup for Social App</h1>
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Signup</button>
            <button className="loginRegisterButton">
              Already have an Account
            </button>
        </div>
    </div>
  );
}