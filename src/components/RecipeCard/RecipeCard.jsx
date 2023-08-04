import React, { useContext } from 'react';
import "./RecipeCard.css"
import { DataContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ id, name, image , cuisineType, onDelete, onEdit }) => {
  const {state, dispatch} = useContext(DataContext);
  const navigate = useNavigate();

  const deleteItem = (id) => {
    console.log(id);
    const updateRecipesData = state.filteredData.filter(item => item.id !== id);
    console.log(updateRecipesData);
    dispatch({type: "DELETE", payload: updateRecipesData})
  }
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={image || "https://2blissofbaking.com/wp-content/uploads/2020/09/dsc_2502-edit-1_ftrx8d9i3t7aw2-768x1154.jpeg"} alt={name} className="recipe-image" />
        <div className="icon-container" onClick={() => deleteItem(id)}>
        <span class="material-symbols-outlined">
delete
</span>
<span class="material-symbols-outlined">
edit
</span>
        </div>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-name">{name}</h3>
        <p className="cuisine-type">Cuisine: {cuisineType}</p>
        <div onClick={() => navigate(`/${id}`)} className="info">Ingredients: See Ingredients </div>
        <div onClick={() => navigate(`/${id}`)} className="info">Instructions: See Instructions </div>

      </div>
    </div>
  );
};

export default RecipeCard;
