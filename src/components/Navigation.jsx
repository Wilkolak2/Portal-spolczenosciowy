import { NavLink, useNavigate } from "react-router-dom";
import '../App.css'

function Navigation({ user, onLogout }) {
    const navigate = useNavigate(); // Inicjalizujemy funkcję navigate do przekierowania

    const handleLogout = () => {
        // Wylogowanie użytkownika
        localStorage.removeItem("user"); // Usuwamy dane użytkownika z localStorage

        // Wywołanie funkcji onLogout, która może np. zaktualizować stan w rodzicu
        onLogout();

        // Przekierowanie użytkownika na stronę główną po wylogowaniu
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <NavLink className="navbar-brand" to="/">SocialApp</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" end>
                            Strona główna
                        </NavLink>
                    </li>
                    {user && (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/post">
                                Utwórz post
                            </NavLink>
                        </li>
                    )}
                    {user ? (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">
                                    Profil
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn" onClick={handleLogout}>
                                    Wyloguj się
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Zaloguj się
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">
                                    Zarejestruj się
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
