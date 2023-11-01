import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

function MealDetail() {
  const [meal, setMeal] = useState(null);
  const { mealId } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  useEffect(() => {
    const getMealDetail = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    getMealDetail();
  }, [mealId]);

  if (!meal) {
    return <h3>Loading Meal Details...</h3>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measurement: meal[`strMeasure${i}`]
      });
    }
  }

  return (
    <div className="meal-detail">
      <Link to="/">Back to Home</Link>
      <button onClick={handleGoBack}>Go Back</button>
      <Link to="/meals">Back to Meal List</Link>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>Category: {meal.strCategory}</p>
      <p>Origin: {meal.strArea}</p>
      <p>Instructions: {meal.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, key) => (
          <li key={key}>
            {item.ingredient} - {item.measurement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealDetail;
