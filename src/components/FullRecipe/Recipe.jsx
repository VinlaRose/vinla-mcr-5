import React from 'react';
import './Recipe.css';

const Recipe = ({ recipe }) => {
  const { name, cuisineType, ingredients, instructions, image } = recipe;
console.log(image)
  return (
    <div className="div">
        <h2>{name}</h2>
        <div className="recipe-container">
      <img src={image || "https://www.miops.com/cdn/shop/articles/Food_Photography___How_to_Take_Unique_and_Creative_Food_Photos_5.jpg?v=1661150733"} alt={name} className="recipe-image" />
      <div className="recipe-details">
        
        <p className="cuisine-type">Cuisine: {cuisineType}</p>
        <div className="ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <span key={index}>{ingredient},</span>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <h3>Instructions:</h3>
          <ol>
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Recipe;
