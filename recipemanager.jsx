import React, { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !instructions) return;

    if (editIndex === -1) {
      setRecipes([...recipes, { title, instructions }]);
    } else {
      const updated = [...recipes];
      updated[editIndex] = { title, instructions };
      setRecipes(updated);
      setEditIndex(-1);
    }
    setTitle("");
    setInstructions("");
  };

  const editRecipe = (index) => {
    setTitle(recipes[index].title);
    setInstructions(recipes[index].instructions);
    setEditIndex(index);
  };

  const deleteRecipe = (index) => {
    if (window.confirm("Delete this delicious recipe? 🍽️")) {
      setRecipes(recipes.filter((_, i) => i !== index));
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: 600,
        margin: "30px auto",
        padding: 20,
        backgroundColor: "#fff8f0",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#c62828" }}>
        🍛 Recipe Manager
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#ffe6cc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        <input
          type="text"
          placeholder="Recipe Title 🥘"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 6,
            border: "1px solid #e07b39",
            marginBottom: 10,
            fontSize: 16,
          }}
        />
        <textarea
          placeholder="Instructions 🍴"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 6,
            border: "1px solid #e07b39",
            fontSize: 16,
            resize: "vertical",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: 10,
            backgroundColor: "#c62828",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: 16,
            width: "100%",
          }}
        >
          {editIndex === -1 ? "Add Recipe 🍲" : "Update Recipe ✍️"}
        </button>
      </form>

      <div>
        {recipes.length === 0 && (
          <p style={{ textAlign: "center", color: "#a94f0d" }}>
            No recipes added yet. Start cooking! 👩‍🍳👨‍🍳
          </p>
        )}

        {recipes.map((recipe, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff3e0",
              borderRadius: 12,
              padding: 20,
              marginBottom: 20,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                margin: "0 0 10px 0",
                color: "#bf360c",
                fontWeight: "700",
              }}
            >
              {recipe.title} 🍽️
            </h2>
            <p style={{ whiteSpace: "pre-line", fontSize: 16 }}>
              {recipe.instructions}
            </p>
            <div style={{ marginTop: 15 }}>
              <button
                onClick={() => editRecipe(index)}
                style={{
                  backgroundColor: "#f57c00",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: 6,
                  color: "#fff",
                  cursor: "pointer",
                  marginRight: 10,
                  fontWeight: "600",
                }}
              >
                Edit ✏️
              </button>
              <button
                onClick={() => deleteRecipe(index)}
                style={{
                  backgroundColor: "#d32f2f",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: 6,
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Delete 🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
