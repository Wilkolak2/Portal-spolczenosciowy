import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Posts from "./Posts.js";

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
        //Posts[Posts.valueOf()._getChildren().value] =
        //navigate("/")
    }

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