import React, { useState } from "react";
import "./App.css";

const initialRecipes = [
  {
    id: 1,
    title: "Malabar Biryani",
    description: "A flavorful South Indian rice dish with spices and chicken.",
    ingredients: ["Basmati rice", "Chicken", "Onions", "Yogurt", "Spices"],
    instructions: [
      "Wash and soak rice for 30 minutes.",
      "Marinate chicken with yogurt and spices.",
      "Fry onions until golden brown.",
      "Cook chicken until tender.",
      "Layer rice and chicken in a pot, cook on low heat for 20 minutes.",
      "Serve hot with raita."
    ],
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "Spicy and rich chicken curry from Kerala cuisine.",
    ingredients: ["Chicken", "Coconut milk", "Onions", "Tomatoes", "Spices"],
    instructions: [
      "Heat oil and sauté onions until soft.",
      "Add spices and cook until fragrant.",
      "Add chicken and brown it.",
      "Add tomatoes and cook until soft.",
      "Pour coconut milk and simmer until chicken is cooked.",
      "Garnish with coriander and serve with rice."
    ],
  },
  {
    id: 3,
    title: "Dosa and Sambar",
    description: "Crispy dosa served with tangy sambar, a classic South Indian combo.",
    ingredients: ["Rice", "Urad dal", "Tamarind", "Vegetables", "Spices"],
    instructions: [
      "Soak rice and urad dal overnight and grind into a batter.",
      "Ferment the batter for 8-12 hours.",
      "Spread batter on a hot griddle to make dosa.",
      "Cook vegetables and tamarind with spices to make sambar.",
      "Serve dosa hot with sambar and chutney."
    ],
  },
 {
  id: 5,
  title: "Donuts",
  description: "Soft, fluffy homemade donuts with sweet glaze.",
ingredients: [
  "Yeast",
  "Milk",
  "Sugar",
  "Butter",
  "Vanilla",
  "Eggs",
  "Flour",
  "Salt",
  "Oil",
  "Sugar glaze"
  ],
  instructions: [
    "Activate yeast in warm milk.",
    "Mix in sugar, butter, vanilla, and eggs.",
    "Add flour and salt to make dough.",
    "Knead dough and let it rise for 1 hour.",
    "Roll dough and cut donut shapes.",
    "Fry until golden brown.",
    "Cool and add glaze or sugar."
  ]
}
];

function RecipeApp() {
  const [recipes] = useState(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="app-container">
      <h1 className="header">🍽️ Recipe App</h1>

      <div className="flex-container">
        <div className="recipe-list">
          <h2>Recipes</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {recipes.map((recipe) => (
              <li
                key={recipe.id}
                className={`recipe-item ${hoveredId === recipe.id ? "hovered" : ""}`}
                onClick={() => setSelectedRecipe(recipe)}
                onMouseEnter={() => setHoveredId(recipe.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {recipe.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="recipe-details">
          {selectedRecipe ? (
            <>
              <h2>{selectedRecipe.title}</h2>
              <p>{selectedRecipe.description}</p>

              <h3>Ingredients:</h3>
              <ul className="ingredient-list">
                {selectedRecipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>

              <h3>Instructions:</h3>
              <ol className="instructions-list">
                {selectedRecipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </>
          ) : (
            <p>Select a recipe to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeApp;
