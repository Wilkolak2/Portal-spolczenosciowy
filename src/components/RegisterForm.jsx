import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Funkcja do rejestracji użytkownika
    const handleSubmit = (e) => {
        e.preventDefault();

        // Sprawdzamy, czy użytkownik już istnieje
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find(user => user.email === email);

        if (userExists) {
            setError("Użytkownik z tym emailem już istnieje");
            return;
        }

        // Dodajemy nowego użytkownika do localStorage
        const newUser = { username, email, password, age, city, description };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Po rejestracji przekierowujemy na stronę logowania
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <div className="col-md-6 mx-auto">
                <h2 className="text-center">Rejestracja</h2>
                <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                    {error && <p className="text-danger">{error}</p>}
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Nazwa użytkownika"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Hasło"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Wiek"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Miasto"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <textarea
                        className="form-control mb-3"
                        placeholder="Opis"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                    />
                    <button type="submit" className="btn w-100" style={{ backgroundColor: "rgb(33, 37, 41)", color: "white" }}>
                        Zarejestruj się
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>Masz już konto? <Link to="/login" style={{ textDecoration: "none", color: "darkblue" }}>Zaloguj się</Link></p>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
// /