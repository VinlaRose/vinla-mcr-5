import { useContext } from "react";
import { useParams } from "react-router-dom"
import { DataContext } from "../../context/context";
import Recipe from "../../components/FullRecipe/Recipe";


export const SingleRecipePage = () => {
const {id} = useParams();

const {state, dispatch} = useContext(DataContext);
const requiredRecipe = state.filteredData.find(item => item.id === id);
console.log(requiredRecipe)
    return (
        <div>
            <Recipe recipe={requiredRecipe} />
        </div>
    )
}