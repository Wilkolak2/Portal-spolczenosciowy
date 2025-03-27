import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Posts from "./Posts.json";

function AddPostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState(Posts);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));

        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newId = Object.keys(posts).length + 1;
        const newPost = {
            id: newId,
            title: title,
            description: content,
            author: user.username,
            likes: 0,
        };

        const updatedPosts = { ...posts, [newId]: newPost };
        setPosts(updatedPosts);
        posts[newId] = newPost;
        localStorage.setItem("posts", JSON.stringify(updatedPosts));

        navigate("/");
    };

    return (
        <div className="container mt-5">
            <div className="col-md-6 mx-auto">
                <h2 className="text-center">Utwórz post</h2>
                <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Tytuł postu"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        className="form-control mb-3"
                        placeholder="Treść postu"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="4"
                    />
                    <button type="submit" className="btn w-100" style={{ backgroundColor: "rgb(33, 37, 41)", color: "white" }}>
                        Wyślij
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddPostForm;