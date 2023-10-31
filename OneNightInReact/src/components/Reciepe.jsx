import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Meals() {
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
                <div key={key} className="card">
                    <h3>{meal.strMeal}</h3>
                </div>
        
        ))}
        </div>
    ): (
      <h3>Loading Meals...</h3>
    );
}

export default Meals;