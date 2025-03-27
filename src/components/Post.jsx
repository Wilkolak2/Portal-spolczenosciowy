import React, { useState, useEffect } from "react";

const Post = () => {

    useEffect(() => {


    return (
        <div className="row">
                            <div className="card shadow">
                                <img
                                    src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text mb-2">
                                        <small className="text-body-secondary">Autor: {post.author}</small>
                                    </p>
                                    <p className="card-text">{post.description}</p>
                                        Lubię to! <span className="badge text-bg-light">{post.likes}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Post;
