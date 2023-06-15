import { useEffect, useState } from "react";
import "../login/Login.css";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword : ""
  })

  const [showPassword, setShowPassword] = useState(false)
 
  //inputs
  const handleInputs = (e) => {
    e.preventDefault();
    setRegisterData({...registerData, [e.target.name] : e.target.value});
  }

  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(registerData.password !== registerData.confirmPassword) return;
    fetch("http://localhost:8800/social/auth/register", {
      method : "post",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(registerData)
    })
  .then((res) => res.json())
  .then((data) => {
    console.log("final Data", data)
  })
};

  useEffect(() => {
    console.log("useEffect", registerData);
  }, [registerData])

  return (
    <div className="login">
    <h1 className="login-header">Signup for Social App</h1>

          <form className="loginBox" onSubmit={handleSubmit}>

            <input 
            placeholder="Username" 
            className="loginInput"
            name="username"
            value={registerData.username}
            onChange={handleInputs} />

            <input 
            placeholder="Email" 
            className="loginInput"
            name="email"
            type="email"
            value={registerData.email} 
            onChange={handleInputs}/>

            <input 
            placeholder="Password" 
            className="loginInput" 
            type={showPassword ? "" : "password"}
            name="password"
            value={registerData.password}
            onChange={handleInputs}/>

            <input 
            placeholder="Confirm Password" 
            className="loginInput" 
            type={showPassword ? "" : "password"}
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleInputs}/>

{/* < input type="checkbox"  onClick={() => setShowPassword(!showPassword)} className="passwordIcon"/>z */}

            <span onClick={() => setShowPassword(!showPassword)} className="passwordIcon">&#128065;</span>

            <button type="submit" className="loginButton">Signup</button>
            <a href="/" className="loginRegisterButton">
              Already have an Account
            </a>
        </form>
    </div>
  );
}