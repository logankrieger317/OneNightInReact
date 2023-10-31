import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Meals from './components/Reciepe'

function App() {
 

  return (
    <div className='App'>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/meals" element={<Meals/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
