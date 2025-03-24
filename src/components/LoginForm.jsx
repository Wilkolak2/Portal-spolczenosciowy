import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();  // Hook do nawigacji

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((user) => user.email === email && user.password === password);

        if (!user) {
            setError("Błędny email lub hasło");
            return;
        }

        // Przekazanie danych użytkownika do głównego komponentu
        onLogin(user);

        // Przekierowanie na stronę główną po zalogowaniu
        navigate("/");  // Przekierowanie na stronę główną

        // Możemy także zapisać dane w localStorage, jeśli użytkownik jest prawidłowy
        localStorage.setItem("user", JSON.stringify(user));
    };

    return (
        <div className="container mt-5">
            <div className="col-md-6 mx-auto">
                <h2 className="text-center">Logowanie</h2>
                <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                    {error && <p className="text-danger">{error}</p>}
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
                    <button type="submit" className="btn w-100" style={{ backgroundColor: "rgb(33, 37, 41)", color: "white" }}>
                        Zaloguj się
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
