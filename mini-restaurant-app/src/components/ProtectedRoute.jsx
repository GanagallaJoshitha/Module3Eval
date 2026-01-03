import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext} from "../context/AuthContext.jsx"

const ProtectedRoute = ({ children, role}) => {
    const {isAuth, role: userRole} = useContext(AuthContext);
    if(!isAuth){
        return <Navigate to = "/"/>;
    }
    if(role && role !== userRole){
        return <Navigate to= "/"/>;
    }
    return children;
};

export default ProtectedRoute;