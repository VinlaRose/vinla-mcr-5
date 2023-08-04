import { useContext, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import { DataContext } from "../../context/context";
import "./Home.css"
import RecipeModal from "../../components/Modal/Modal";
import SearchBar from "../../components/Search/Search";

export const Home = () => {
    const {state,dispatch} = useContext(DataContext);
    const [modalOpen, setModalOpen] = useState(false)

    const onAddClick = () => {
       setModalOpen(true)
    }

    const onClose = () => {
        setModalOpen(false)
    }

    const onSave = () => {
        setModalOpen(false)
    }
    const onSearch = (category, term) => {
        console.log('Search Category:', category);
        console.log('Search Query:', term);
      
        let filteredData;
      
        if (category === 'name') {
          filteredData = state.data.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
          );
        } else if (category === 'cuisineType') {
          filteredData = state.data.filter((item) =>
            item.cuisineType.toLowerCase().includes(term.toLowerCase())
          );
        } else if (category === 'ingredients') {
          filteredData = state.data.filter((item) =>
            item.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(term.toLowerCase())
            )
          );
        } else {
         filteredData = state.data;
        }
      
        
        dispatch({ type: 'UPDATE', payload: filteredData });
      };
      

    return(
        <div>
           
           <SearchBar onSearch={onSearch} />
            <div className="allRecipes">
            {
                state.filteredData.map(item => (
                    <RecipeCard key={item.id} id={item.id} name={item.name} imageSrc=  "https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2018/img-9706-1531814575.jpeg" cuisineType={item.cuisineType}/>
                ))
            }
            <button className="add-button" onClick={onAddClick}>
      <span className="plus-sign">+</span>
    </button>
    


            </div>

            {
        modalOpen && <RecipeModal isOpen={true} onClose={onClose} onSave= {onSave}/>
    }


           
            
        </div>
    )
}