import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPostForm({ user }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(), // Możesz użyć daty jako ID
            title,
            description: content,
            author: user.username,
            likes: 0,
        };

        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        savedPosts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(savedPosts));

        // Po dodaniu posta przekierowujemy na stronę główną
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
