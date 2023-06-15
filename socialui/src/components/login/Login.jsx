import { useEffect, useState } from "react";
import "./Login.css";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email:"",
    password:""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLoginInputs = (e) => {
    e.preventDefault();
    setLoginData({...loginData, [e.target.name] : e.target.value});
  }
//LOGIN 
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submitting")
    fetch("http://localhost:8800/social/auth/login", {
      method : "post",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(loginData)
    })
  .then((res) => res.json())
  .then((data) => {
    window.location.replace("/home");// redirect to another page
    console.log("final Login Data", data)
  })
};


  useEffect((e) => {
    console.log("login Data", loginData)
  }, [loginData]);


  //REGISTER 
  return (
    <>
    <div className="login">

    <h1 className="login-header">Social App</h1>
          <form className="loginBox" onSubmit={handleLoginSubmit}>

            <input 
            placeholder="Email" 
            className="loginInput" 
            required 
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginInputs}/>

            <input 
            placeholder="Password" 
            className="loginInput" 
            required 
            type={showPassword ? "" : "password"}
            name="password"
            value={loginData.password}
            onChange={handleLoginInputs}/>
            <span onClick={() => setShowPassword(!showPassword)} className="passwordIcon">&#128065;</span>


            <button className="loginButton" type="submit" >Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <a href="/register"  className="loginRegisterButton" >Create a New Account</a>
           
        </form>
    </div>
    </>
  );
}