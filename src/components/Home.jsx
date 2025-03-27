import Post from "./Post.jsx";

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
                    <Post />
                </div>
            </div>
        </>
    );
}

export default Home;
