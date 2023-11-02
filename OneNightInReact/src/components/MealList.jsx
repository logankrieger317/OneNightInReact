import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MealList() {
  const [meals, setMeals] = useState(null);
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get('search') || "";

  useEffect(() => {
    const getMeals = async ()  =>  {
        try{
        const response =   await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
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
    <>
    <Header/>
      <div className="meal-list-header">
         <h1>List of Meal</h1>
        </div>

      <div className="meal">

            {meals.map((meal, key) => (
                <div key={key} className="mealCard" onClick={() => showMeal(meal.idMeal)}>
                    <img className="food-image" src={meal.strMealThumb} alt={meal.strMeal}/>
                    <h2>{meal.strMeal}</h2>
                    <h3>{meal.strCategory}</h3>
                    <h3>{meal.strArea}</h3>
                </div>
        
        ))}
       <Footer/>
      </div>
    </>
    ): (
      <h3>Loading Meals...</h3>
    );
}

export default MealList;