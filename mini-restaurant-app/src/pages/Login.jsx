import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

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
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <input type = "email"
                placeholder="Email"
                value = {email}
                onChange={(e) => setPassword(e.target.value)}
                />

                <input type = "password"
                placeholder="Password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type = "submit">Login</button>
            </form>
        </div>
    );
};
export default Login;