import { useEffect, useState } from "react";

function Profile() {
    const [user, setUser] = useState({}); // Domyślnie pusty obiekt zamiast null

    useEffect(() => {
        // Pobieramy dane zalogowanego użytkownika z localStorage
        const loggedInUser = JSON.parse(localStorage.getItem("user"));

        // Jeśli użytkownik jest zalogowany, zapisujemy jego dane
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    return (
        <div className="container mt-4">
            <div className="card p-4 text-center shadow">
                <h2>Profil użytkownika</h2>
                <p>Tu będą informacje o użytkowniku.</p>
            </div>
            <div className="container mt-4">
                <div className="card p-4 shadow">
                    <div className="container d-flex flex-row">
                        <div className="col-8">
                            <p>Nazwa użytkownika: {user.username}</p>
                            <p>Wiek: {user.age || "Nie podano"}</p>
                            <p>Miasto: {user.city || "Nie podano"}</p>
                            <p>Opis: {user.description || "Brak opisu"}</p>
                            <p>Użytkownik portalu od: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="col-4">
                            <span className="rounded">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                    className="card-img-top rounded-5"
                                    alt="placeholder"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
