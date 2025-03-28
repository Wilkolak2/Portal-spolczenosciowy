import React, { useState, useEffect } from "react";


const Post = () => {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("posts");
        return savedPosts ? JSON.parse(savedPosts) : [];
    });

    const [likedPosts, setLikedPosts] = useState(() => {
        const savedLikedPosts = localStorage.getItem("likedPosts");
        return savedLikedPosts ? JSON.parse(savedLikedPosts) : [];
    });

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    useEffect(() => {
        if (posts.length > 0) {
            localStorage.setItem("posts", JSON.stringify(posts));
        }
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    }, [posts, likedPosts]);

    const handleLike = (id) => {
        const updatedPosts = posts.map((post) =>
            post.id === id && post.author !== user.username && !likedPosts.includes(post.id)
                ? { ...post, likes: post.likes + 1 }
                : post
        );

        setPosts(updatedPosts);
        setLikedPosts([...likedPosts, id]);
    };

    return (
        <div className="row">
            {posts.length > 0 ? (
                posts
                    .sort((a, b) => b.id - a.id)
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
