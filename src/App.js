
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { SingleRecipePage } from './Pages/SingleRecipePage/SingleRecipe';

function App() {
  return (
    <div className="App">
      <h1>MCR 5</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<SingleRecipePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
