import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function CategoryList() {
    
    const [ categories, setCategories ] = useState([])
    let navigate = useNavigate()

    useEffect(()=>{
        const getCategories = async() => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            console.log(response)
            setCategories(response.data.categories)
        }
        getCategories()
    },[])
    
    
    const showCategoryMeals = (strCategory) => {
        navigate(`/categories/${strCategory}`)
    }
    
    
    
    return(
        <div className="categoryList">
            <h2>Category List</h2>
            {categories.map((category, key) => (
                <div key={key} className="categoryCard" onClick={()=> showCategoryMeals(category.strCategory)}>
                    <img src={category.strCategoryThumb}/>
                    <h3>{category.strCategory}</h3>
                    <h4>{category.strCategoryDescription}</h4>
                </div>
            ))}
        </div>
    )
}