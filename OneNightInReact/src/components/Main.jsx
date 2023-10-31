import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
    return(
        <>
        <div className="main">
            
            <div className="firstLayer">
            <Header/>
                <h1 className="intro">One Night In React</h1>
                <h2 className="intro">A Recipe App</h2>
                <div className="secondLayer">
                    <h3>Looking for a delicious and easy-to-make recipe? Look no further than our recipe app! With our app, you can search for recipes by ingredient, cuisine, or dish type. You can also save your favorite recipes for later, and create shopping lists to make grocery shopping easier.<br/>

                    Our app is perfect for busy people who want to enjoy delicious home-cooked meals without having to spend hours in the kitchen. We have recipes for all skill levels, from beginner to expert. And our recipes are always updated with new and exciting ideas.

</h3>
                    <div className="thirdLayer">

                        <div className="card">
                        <h1>Test</h1>
                        </div>
                        <div className="card">
                        <h1>Test</h1>
                        </div>
                        <div className="card">
                        <h1>Test</h1>
                        </div>
                    </div>
                </div>
                    <h1>test</h1>
            </div>
            <Footer/>
        </div>
        </>
    )
}