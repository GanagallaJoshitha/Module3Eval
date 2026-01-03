import { Children, createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [role, setRole] = useState("");

    const login = (email, password) => {
        if(email === "admin@gmail.com" && password === "customer1234"){
            setIsAuth(true);
            setRole ("customer");
            return "customer";
        }
        return null;
    };
    const logout = () => {
        setIsAuth(false);
        setRole("");
    };
    return (
        <AuthContext.Provider value={{isAuth, role, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};