import { NavLink } from "react-router-dom";
import '../App.css'
function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <NavLink className="navbar-brand" to="/">SocialApp</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/"
                            end
                        >
                            Strona główna
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/post"
                            end
                        >
                            Utwórz post
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/profile"
                        >
                            Profil
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
