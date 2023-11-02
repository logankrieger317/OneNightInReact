import Nav from "./Nav"

export default function Header() {
    return(
        <div className="Header">
            <div className="hero">
            <h1 className="header-title">One Night In React</h1>
            <Nav/>
            </div>
        </div>
    )
}