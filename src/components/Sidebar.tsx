import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/movement">Movimientos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;