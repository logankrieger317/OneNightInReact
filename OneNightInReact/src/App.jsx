import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

import MealList from './components/MealList'
import MealDetail from './components/MealsDetail'
import CategoryList from './components/CategoryList'
import CategoryDetail from './components/CategoryDetail'

function App() {
 

  return (
    <div className='App'>
      
      <main>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/meals" element={<MealList/>}/>
          <Route path="/meals/:mealId" element={<MealDetail />} />
          <Route path="/categories" element={ <CategoryList/> }/>
          <Route path="/categories/:strCategory" element={<CategoryDetail/>}/>

        </Routes>
      </main>
      
    </div>
  )
}

export default App
