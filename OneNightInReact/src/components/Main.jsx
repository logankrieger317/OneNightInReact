import Header from "./Header";
import Footer from "./Footer";
import RandomMeal from './RandomMeal';
import MealList from "./MealList";


export default function Main() {
    return(
        <>
            <Header />
            <main className="Main">
                <div className="featuredMeal">
                <RandomMeal />
                </div>
                <div className="mealList">
                <MealList />
                </div>
            </main>
            <Footer />
        </>
    )
}