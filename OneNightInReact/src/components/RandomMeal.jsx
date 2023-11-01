import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RandomMeal() {
    const [randomMeal, setRandomMeal] = useState(null);

    useEffect(() => {
        const getRandomMeal = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
                setRandomMeal(response.data.meals[0]);
            } catch (error) {
                console.error('Error fetching random meal:', error);
            }
        };

        getRandomMeal();
    }, []);

    return (
        <section className="featured-section">
            <h2 className='featured-section-header'>Featured Meal</h2>
            
            {randomMeal ? (
                <div className="featured-meal">
                    <img className="food-image" src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                    <h3>{randomMeal.strMeal}</h3>
                    <p>Category: {randomMeal.strCategory}</p>
                    <p>Cuisine: {randomMeal.strArea}</p>
                    <Link to={`/meals/${randomMeal.idMeal}`}>View Details</Link>
                </div>
            ) : (
                <p>Loading featured meal...</p>
            )}
        </section>
    );
}

export default RandomMeal;
