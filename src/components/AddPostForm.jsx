import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: newId,
            title: title,
            description: content,
            likes: 0,
        };

        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));

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
                        Wyślij
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddPostForm;