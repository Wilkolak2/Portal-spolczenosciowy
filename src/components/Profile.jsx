function Profile() {
    return (<>
        <div className="container mt-4">
            <div className="card p-4 text-center shadow">
                <h2>Profil użytkownika</h2>
                <p>Tu będą informacje o użytkowniku.</p>
            </div>
        </div>
            <div className="container mt-4">
                <div className="card p-4 shadow">
                    <div className="container d-flex flex-row">
                        <div className="col-8">
                            <h3>Nazwa użytkownika</h3>
                            <p>Imię: Jan Kowalski</p>
                            <p>Wiek: 22</p>
                            <p>Miasto: Wrocław</p>
                            <p>Opis: Hej lubię placki</p>
                            <p>Użytkownik portalu od: 14.03.2025</p>
                        </div>
                        <div className="col-4">
                            <span className="rounded">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                    className="card-img-top rounded-5" alt="placeholder"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
