import { useEffect, useState } from "react";

function Home() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || {};
        setPosts(Object.values(savedPosts));

        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        setUser(loggedInUser);
    }, []);


    const handleLike = (id) => {
        if (!user) {
            alert("Aby polubić post, musisz być zalogowany!");
            return;
        }

        const updatedPosts = posts.map((post) => {
            if (post.id === id) {
                return { ...post, likes: post.likes + 1 };
            }
            return post;
        });

        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    };

    return (
        <>
            <div className="container mt-4">
                <div className="card p-4 text-center shadow">
                    <h2>Strona główna</h2>
                    <p>Witamy w naszej aplikacji społecznościowej!</p>
                    <p>Tutaj będą pojawiać się posty użytkowników.</p>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className="col-4 mb-4">
                                <div className="card shadow">
                                    <img
                                        src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                        className="card-img-top" alt="placeholder"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.description}</p>
                                        <p className="text-muted">Autor: {post.author}</p>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleLike(post.id)}
                                            disabled={!user}
                                        >
                                            Lubię to! <span className="badge text-bg-light">{post.likes}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Brak postów do wyświetlenia.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
