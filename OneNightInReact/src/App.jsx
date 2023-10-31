import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

import Meals from './components/Reciepe'

import CategoryList from './components/CategoryList'

function App() {
 

  return (
    <div className='App'>
      
      <main>
        <Routes>
          <Route path="/" element={ <Home/> }/>

          <Route path="/meals" element={<Meals/>}/>

          <Route path="/categories" element={ <CategoryList/> }/>

        </Routes>
      </main>
      
    </div>
  )
}

export default App
