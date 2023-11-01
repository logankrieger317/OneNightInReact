import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function MealList() {
  const [meals, setMeals] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const getMeals = async ()  =>  {
        try{
        const response =   await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        console.log(response)
     setMeals(response.data.meals)
    } catch (error) {
        console.error("Error fetching meals:", error)
      }
    }
    getMeals()
  }, []);

const showMeal = (mealId) => {
  navigate(`/meals/${mealId}`);
};

  return meals ? (
    <div className="meal">
            <h1>List of Meal</h1>
            
            {meals.map((meal, key) => (
                <div key={key} className="mealCard" onClick={() => showMeal(meal.idMeal)}>
                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                    <h2>{meal.strMeal}</h2>
                    <h3>{meal.strCategory}</h3>
                    <h3>{meal.strArea}</h3>
                </div>
        
        ))}
        <Link to="/">Back to Home</Link>
        </div>
    ): (
      <h3>Loading Meals...</h3>
    );
}

export default MealList;