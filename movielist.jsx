import React, { useState } from "react";

function MovieWatchlist() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newMovie = {
      title,
      genre,
      rating: rating ? Number(rating) : null,
      watched: false,
    };

    if (editIndex === null) {
      setMovies([...movies, newMovie]);
    } else {
      const updated = movies.map((m, i) => (i === editIndex ? newMovie : m));
      setMovies(updated);
      setEditIndex(null);
    }

    setTitle("");
    setGenre("");
    setRating("");
  };

  const handleDelete = (i) => {
    setMovies(movies.filter((_, idx) => idx !== i));
    if (editIndex === i) {
      setEditIndex(null);
      setTitle("");
      setGenre("");
      setRating("");
    }
  };

  const handleEdit = (i) => {
    setTitle(movies[i].title);
    setGenre(movies[i].genre);
    setRating(movies[i].rating || "");
    setEditIndex(i);
  };

  const toggleWatched = (i) => {
    setMovies(
      movies.map((m, idx) =>
        idx === i ? { ...m, watched: !m.watched } : m
      )
    );
  };

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Movie Watchlist</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 24,
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            flex: "1 1 250px",
            padding: 12,
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{
            flex: "1 1 150px",
            padding: 12,
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <input
          type="number"
          placeholder="Rating (1-10)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="10"
          style={{
            flex: "1 1 100px",
            padding: 12,
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          style={{
            flex: "0 0 140px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 16,
            fontWeight: "600",
            padding: "12px 0",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#0056b3"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#007bff"}
        >
          {editIndex === null ? "Add Movie" : "Update Movie"}
        </button>
      </form>

      {movies.length === 0 && <p style={{ textAlign: "center", color: "#666" }}>No movies added yet.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {movies.map((movie, i) => (
          <div
            key={i}
            style={{
              borderRadius: 12,
              boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
              background: movie.watched ? "#d4edda" : "#fff",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <div>
              <h3
                style={{
                  margin: "0 0 10px",
                  color: "#222",
                  textDecoration: movie.watched ? "line-through" : "none",
                }}
              >
                {movie.title}
              </h3>
              <p style={{ margin: "0 0 4px", fontWeight: "600", color: "#555" }}>
                Genre: <span style={{ fontWeight: "400" }}>{movie.genre || "N/A"}</span>
              </p>
              <p style={{ margin: 0, fontWeight: "600", color: "#555" }}>
                Rating: <span style={{ fontWeight: "400" }}>{movie.rating || "N/A"}</span>
              </p>
            </div>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <button
                onClick={() => toggleWatched(i)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  backgroundColor: movie.watched ? "#28a745" : "#ffc107",
                  border: "none",
                  borderRadius: 6,
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={e =>
                  e.currentTarget.style.backgroundColor = movie.watched ? "#218838" : "#e0a800"
                }
                onMouseLeave={e =>
                  e.currentTarget.style.backgroundColor = movie.watched ? "#28a745" : "#ffc107"
                }
              >
                {movie.watched ? "Unwatch" : "Watched"}
              </button>
              <button
                onClick={() => handleEdit(i)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  backgroundColor: "#17a2b8",
                  border: "none",
                  borderRadius: 6,
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#117a8b")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#17a2b8")}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(i)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  backgroundColor: "#dc3545",
                  border: "none",
                  borderRadius: 6,
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#b02a37")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#dc3545")}
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
