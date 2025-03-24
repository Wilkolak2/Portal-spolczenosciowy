import { useEffect, useState } from "react";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Pobieramy dane zalogowanego użytkownika z localStorage
        const loggedInUser = JSON.parse(localStorage.getItem("user"));

        // Jeśli użytkownik jest zalogowany, zapisujemy jego dane
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    // Jeśli użytkownik nie jest zalogowany, wyświetlamy komunikat
    if (!user) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    Musisz się zalogować, aby zobaczyć swój profil.
                </div>
            </div>
        );
    }

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
                            <h3>{user.username}</h3>
                            <p>Imię: {user.username}</p>
                            <p>Wiek: {user.age}</p>
                            <p>Miasto: {user.city}</p>
                            <p>Opis: {user.description}</p>
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
