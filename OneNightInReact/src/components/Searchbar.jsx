import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState("");
    let navigate = useNavigate();

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/meals?search=${query}`);
    };

    return (
        <div className='searchbar'>
            <h1 className='searchbar-header'>Search for a Meal</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='searchbar-input'
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for a meal..."
                />
                <button className='navButton' type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
