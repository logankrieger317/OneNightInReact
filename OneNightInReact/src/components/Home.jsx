import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import RandomMeal from './RandomMeal';

export default function Home() {
    return(
        <div className="Home">

            <Header/>
            <RandomMeal />

            

            <Main/>
            
        </div>
    )
}