import React, { useState, useEffect } from "react";
import Posts from "./Posts.json";

const Post = () => {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("posts");
        return savedPosts ? JSON.parse(savedPosts) : Posts;
    });

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

    const handleLike = (id) => {
        const numericId = Number(id);
        setPosts((prevPosts) => {
            const updatedPosts = {
                ...prevPosts,
                [numericId]: {
                    ...prevPosts[numericId],
                    likes: prevPosts[numericId].likes + 1,
                },
            };
            localStorage.setItem("posts", JSON.stringify(updatedPosts));
            return updatedPosts;
        });
    };

    return (
        <div className="row">
            {Object.entries(posts)
                .sort(([idA], [idB]) => Number(idB) - Number(idA))
                .map(([id, post]) => (
                    <div key={id} className="col-4 mb-4">
                        <div className="card shadow">
                            <img
                                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                className="card-img-top" alt="placeholder"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text mb-2">
                                    <small className="text-body-secondary">Autor: {post.author}</small>
                                </p>
                                <p className="card-text">{post.description}</p>
                                <button className="btn btn-primary" onClick={() => handleLike(id)}>
                                    Lubię to! <span className="badge text-bg-light">{post.likes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Post;
