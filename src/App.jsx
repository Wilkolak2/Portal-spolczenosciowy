import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import Navigation from "./components/Navigation.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import { useState, useEffect } from "react";
import AddPostForm from "./components/AddPostForm.jsx";

function App() {
    const [user, setUser] = useState(null);

    // Sprawdzamy, czy użytkownik jest już zalogowany przy pierwszym załadowaniu strony
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    // Funkcja do logowania użytkownika
    const handleLogin = (userData) => {
        setUser(userData); // Aktualizujemy stan użytkownika
        localStorage.setItem("user", JSON.stringify(userData)); // Zapisujemy dane w localStorage
    };

    // Funkcja do wylogowania użytkownika
    const handleLogout = () => {
        setUser(null); // Usuwamy stan użytkownika
        localStorage.removeItem("user"); // Usuwamy dane z localStorage
    };

    return (
        <>
            <Navigation user={user} onLogout={handleLogout} />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile user={user} />} />
                    {/* Jeśli użytkownik nie jest zalogowany, pokaż formularz logowania */}
                    {!user ? (
                        <>
                            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                            <Route path="/register" element={<RegisterForm />} />
                        </>
                    ) : (
                        <Route path="/login" element={<Home />} /> // Przekierowanie do strony głównej
                    )}
                    <Route path="/post" element={<AddPostForm />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
