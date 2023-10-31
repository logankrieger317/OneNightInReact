import React from "react"
import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <div className="Nav">
            <div>
                <Link to="/"> Home </Link>
                <Link to="/categories"> Categories </Link>
            </div>
        </div>
    )
}