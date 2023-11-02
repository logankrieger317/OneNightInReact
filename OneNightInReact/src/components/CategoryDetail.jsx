import { useState, useEffect } from "react";
import axios from "axios"
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";

export default function CategoryDetail() {
    
    const [ category, setCategory ] = useState([])
    const { strCategory } = useParams()
    let navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1);
  }

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
        <div className="categoryMain">
            <Header/>
            
            <p onClick={handleGoBack}>Go Back</p>
            <h2>{strCategory}</h2>
            <div className="categoryList">
            {category.map((meals, key) =>(
                <div key={key} className="categoryCard" onClick={() => showMeal(meals.idMeal)}>
                    <img className="categoryImage" src={meals.strMealThumb}/>
                    <h3>{meals.strMeal}</h3>
                </div>
            ))}
            </div>
            <Footer/>
        </div>
    )
}