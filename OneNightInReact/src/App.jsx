import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

import MealList from './components/MealList'
import MealDetail from './components/MealsDetail'
import CategoryList from './components/CategoryList'

function App() {
 

  return (
    <div className='App'>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={ <Home/> }/>

          <Route path="/meals" element={<MealList/>}/>
          <Route path="/meals/:mealId" element={<MealDetail />} />
          <Route path="/categories" element={ <CategoryList/> }/>

        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
