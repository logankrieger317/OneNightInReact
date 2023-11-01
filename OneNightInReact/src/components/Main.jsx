import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
    return(
        <>
        <div className="main">
            <Header/>
            <div className="firstLayer">
                <h1 className="intro">One Night In React</h1>
                <h2 className="intro">A Recipe App</h2>
                <div className="secondLayer">
                    <h3>Looking for a delicious and easy-to-make recipe? Look no further than our recipe app! With our app, you can search for recipes by ingredient, cuisine, or dish type. You can also save your favorite recipes for later, and create shopping lists to make grocery shopping easier.<br/>

                    Our app is perfect for busy people who want to enjoy delicious home-cooked meals without having to spend hours in the kitchen. We have recipes for all skill levels, from beginner to expert. And our recipes are always updated with new and exciting ideas.

                    </h3>
                    <div className="thirdLayer">

                        <div className="slideshow">
                        <image>Slide Show</image>
                        </div>
                        
                    </div> {/*end of thirdLayer*/}
                    <h1>Featured Recipes</h1>
                    <div className="cardContainer">
                        <div className="card">
                        <image>image1</image>
                        </div>
                        
                    </div> {/*end of cardContainer*/}
                </div> {/*end of secondLayer*/}
                
                    <input className="input" type="text" placeholder="Search for a recipe"/>
                    <button className="button">Search</button>

            </div> {/*end of firstLayer*/}
            <Footer/>
        </div> {/*end of main*/}
        </>
    )
}