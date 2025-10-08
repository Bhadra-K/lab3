
import React, { useState } from "react";

function MovieWatchlist() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    if (editIndex === -1) {
      // Add new movie
      setMovies([...movies, { title, description }]);
    } else {
      // Update existing movie
      const updatedMovies = [...movies];
      updatedMovies[editIndex] = { title, description };
      setMovies(updatedMovies);
      setEditIndex(-1);
    }

    setTitle("");
    setDescription("");
  };

  const editMovie = (index) => {
    setTitle(movies[index].title);
    setDescription(movies[index].description);
    setEditIndex(index);
  };

  const deleteMovie = (index) => {
    if (window.confirm("Remove this movie from your watchlist?")) {
      setMovies(movies.filter((_, i) => i !== index));
      // Reset edit if deleting the movie being edited
      if (editIndex === index) {
        setEditIndex(-1);
        setTitle("");
        setDescription("");
      }
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f4f8",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        🎬 Movie Watchlist
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 8,
          marginBottom: 30,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
            marginBottom: 10,
          }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            padding: 10,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: 10,
            width: "100%",
            padding: 12,
            backgroundColor: "#007BFF",
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          {editIndex === -1 ? "Add Movie" : "Update Movie"}
        </button>
      </form>

      {movies.length === 0 && (
        <p style={{ textAlign: "center", color: "#666" }}>
          No movies added yet. Start adding your watchlist!
        </p>
      )}

      <div>
        {movies.map((movie, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 8,
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              marginBottom: 15,
            }}
          >
            <h2 style={{ margin: "0 0 10px", color: "#007BFF" }}>
              {movie.title}
            </h2>
            <p style={{ margin: "0 0 10px", color: "#555" }}>
              {movie.description}
            </p>
            <div>
              <button
                onClick={() => editMovie(index)}
                style={{
                  marginRight: 10,
                  padding: "6px 12px",
                  backgroundColor: "#ffc107",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteMovie(index)}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieWatchlist;
