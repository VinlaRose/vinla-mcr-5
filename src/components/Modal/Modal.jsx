import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Modal.css';
import { DataContext } from '../../context/context';

const RecipeModal = ({ isOpen, onClose, onSave }) => {
    const {state, dispatch} = useContext(DataContext);
  const [name, setName] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [image, setImage] = useState('');

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleSave = () => {
    const recipe = {
      id: uuidv4(),
      name,
      cuisineType,
      ingredients,
      instructions,
      image,
    };
    console.log(recipe);
    const updateRecipeData = [...state.filteredData, recipe];
    console.log(updateRecipeData)
    onSave(recipe);
    dispatch({type: "FETCH_DATA", payload: updateRecipeData})
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Recipe</h2>
        <label htmlFor="name">Recipe Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        
        <label htmlFor="cuisineType">Cuisine Type:</label>
        <input type="text" id="cuisineType" value={cuisineType} onChange={(e) => setCuisineType(e.target.value)} />
        
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
        
        <div className="ingredients-container">
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index] = e.target.value;
                  setIngredients(newIngredients);
                }}
              />
            </div>
          ))}
          <button className="adding-button" onClick={handleAddIngredient}>Add Ingredient</button>
        </div>
        
        <div className="instructions-container">
          <label>Instructions:</label>
          {instructions.map((instruction, index) => (
            <div key={index}>
              <textarea
                value={instruction}
                onChange={(e) => {
                  const newInstructions = [...instructions];
                  newInstructions[index] = e.target.value;
                  setInstructions(newInstructions);
                }}
              />
            </div>
          ))}
          <button className="adding-button" onClick={handleAddInstruction}>Add Instruction</button>
        </div>
        
        <div className="button-container">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="discard-button" onClick={onClose}>Discard</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
