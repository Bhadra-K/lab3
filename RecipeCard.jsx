import React from 'react';
import './App.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <a href={recipe.strSource || recipe.strYoutube} target="_blank" rel="noreferrer">
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;
