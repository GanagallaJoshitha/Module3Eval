import { useContext } from "react";
import {AuthContext} from '../contexts/AuthContext';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };

    return(
        <nav>
            <ul>
                <li>
                    <Link to = {user.role === 'admin' ? 'admin/dashboard' : '/customers/dashboard'}>
                    Dashboard
                    </Link>
                </li>
                {user.role === 'admin' && (
                    <li>
                        <Link to = "/admin/restaurants/update">Update Restaurant</Link>
                    </li>
                )}
                <li>
                    <button onClick = {handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;