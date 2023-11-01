import { useState, useEffect } from "react";
import axios from "axios"
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function CategoryDetail() {
    
    const [ category, setCategory ] = useState([])
    const { strCategory } = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        const getCategory = async() => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
            console.log(response)
            setCategory(response.data.meals)
        }
        getCategory()
    },[])

    const showMeal = (mealId) => {
        navigate(`/meals/${mealId}`);
      };

    return(
        <div className="categoryDetail">
            <h2>{strCategory}</h2>
            {category.map((meals, key) =>(
                <div key={key} className="categoryMealCard" onClick={() => showMeal(meals.idMeal)}>
                    <img src={meals.strMealThumb}/>
                    <h3>{meals.strMeal}</h3>
                </div>
            ))}

        </div>
    )
}