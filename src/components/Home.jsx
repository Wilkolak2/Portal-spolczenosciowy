function Home() {
    return (<>
            <div className="container mt-4">
                <div className="card p-4 text-center shadow">
                    <h2>Strona główna</h2>
                    <p>Witamy w naszej aplikacji społecznościowej!</p>
                    <p>Tutaj będą pojawiać się zdjęcia użytkowników.</p>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-4">
                        <div className="card shadow">
                            <img
                                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                className="card-img-top" alt="placeholder"/>
                            <div className="card-body">
                                <h5 className="card-title">Tytuł</h5>
                                <p className="card-text">Przykładowy post na portalu</p>
                                <a href="#" className="btn btn-primary">Lubię to! <span className="badge text-bg-light">0</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card shadow">
                            <img
                                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                className="card-img-top" alt="placeholder"/>
                            <div className="card-body">
                                <h5 className="card-title">Tytuł</h5>
                                <p className="card-text">Przykładowy post na portalu</p>
                                <a href="#" className="btn btn-primary">Lubię to! <span className="badge text-bg-light">0</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card shadow">
                            <img
                                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                className="card-img-top" alt="placeholder"/>
                            <div className="card-body">
                                <h5 className="card-title">Tytuł</h5>
                                <p className="card-text">Przykładowy post na portalu</p>
                                <a href="#" className="btn btn-primary">Lubię to! <span className="badge text-bg-light">0</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
