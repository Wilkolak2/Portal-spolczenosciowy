import React, { useState, useEffect } from "react";

const Post = () => {
    const [posts, setPosts] = useState(() => {
        // Pobieramy zapisane posty z localStorage lub zwracamy pustą tablicę, jeśli nic nie ma
        const savedPosts = localStorage.getItem("posts");
        return savedPosts ? JSON.parse(savedPosts) : [];
    });

    // Używamy useEffect, aby zapisać posty do localStorage za każdym razem, gdy posts się zmieniają
    useEffect(() => {
        if (posts.length > 0) {
            localStorage.setItem("posts", JSON.stringify(posts)); // Zapisujemy zaktualizowane posty
        }
    }, [posts]); // Reagujemy na zmiany w postach

    // Funkcja do obsługi kliknięcia przycisku "Lubię to!"
    const handleLike = (id) => {
        // Zwiększamy liczbę polubień dla wybranego postu
        const updatedPosts = posts.map((post) => {
            if (post.id === id) {
                return { ...post, likes: post.likes + 1 }; // Zwiększamy polubienia o 1
            }
            return post;
        });

        // Zaktualizowane posty
        setPosts(updatedPosts); // Ustawiamy stan zaktualizowanych postów

        // Zapisujemy zaktualizowane posty w localStorage
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    };

    return (
        <div className="row">
            {posts.length > 0 ? (
                posts
                    .sort((a, b) => b.id - a.id) // Sortowanie postów malejąco po id
                    .map((post) => (
                        <div key={post.id} className="col-4 mb-4">
                            <div className="card shadow">
                                <img
                                    src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                    className="card-img-top"
                                    alt="placeholder"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text mb-2">
                                        <small className="text-body-secondary">Autor: {post.author}</small>
                                    </p>
                                    <p className="card-text">{post.description}</p>
                                    <button className="btn btn-primary" onClick={() => handleLike(post.id)}>
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
    );
};

export default Post;
