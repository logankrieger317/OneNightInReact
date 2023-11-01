import React from "react"
import { Link } from 'react-router-dom'
import SearchBar from "./Searchbar"

export default function Nav() {
    return(
        <div className="nav">
            <div>

                <Link className="navButton" to="/"> Home </Link>

                <Link className="navButton" to="/meals">Meals</Link>
                

                <Link className="navButton" to="/categories"> Categories </Link>
                <SearchBar/>
            </div>
        </div>
    )
}