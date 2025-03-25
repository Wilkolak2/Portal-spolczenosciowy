import React, {useState} from "react";
import Posts from "./Posts.js";

const Post = () => {
    const [posts, setPosts] = useState(Posts);

    const handleLike = (id) => {
        console.log(id);
        setPosts((prevPosts) => ({
            ...prevPosts,
            [id]: {
                ...prevPosts[id],
                likes: prevPosts[id].likes + 1,
            },
        }));
    };


    return (<>
        {Object.entries(posts).sort(([idA], [idB]) => idB - idA).map(([id, post]) => (
                <div className="col-4 mb-4">
                    <div className="card shadow">
                        <img
                            src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                            className="card-img-top" alt="placeholder"/>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text mb-2"><small className="text-body-secondary">Autor: {post.author}</small></p>
                            <p className="card-text">{post.description}</p>
                            <button className="btn btn-primary" onClick={() => handleLike(id)}>Lubię to! <span
                                className="badge text-bg-light">{post.likes}</span></button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};


export default Post;
