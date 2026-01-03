import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
   const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if(!email || !password){
            alert("Please fill all fields");
            return;
        }
        const role = login (email, password);

        if(!role){
            alert("Invalid email or password");
            return;
        }

        alert ("Login Successful");

        role === "admin"
        ? navigate("/admin/dashboard")
        : navigate("/customers/dashboard");
    };

    return (
<div className="login-container">
    <h3>Login</h3>
    <input id = "email" type = "email" placeholder="Email"/>
    <input id = "password" type = "password" placeholder="Password"/>
    <button onClick = {handleLogin}>Login</button>
    </div>
        
    );
};
export default Login;