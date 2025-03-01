import { useState } from 'react'
import MenuRoulette from './components/MenuRoulette'
import CheesecakeRoulette from './components/CheesecakeRoulette'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Fac Roulette</h1>
      <div className="roulette-container">
        <MenuRoulette 
          type="food" 
          title="Food Roulette"
        />
        <MenuRoulette 
          type="drink" 
          title="Drink Roulette"
        />
        <CheesecakeRoulette />
      </div>
    </div>
  )
}

export default App 