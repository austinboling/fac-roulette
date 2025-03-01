import { useState } from 'react'
import { cheesecakeItems } from '../data/cheesecakes'
import RandomResult from './RandomResult'

function CheesecakeRoulette() {
  const [result, setResult] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const spinRoulette = () => {
    setIsSpinning(true)
    const finalItem = cheesecakeItems[Math.floor(Math.random() * cheesecakeItems.length)]
    
    let spins = 0
    const maxSpins = 20
    const interval = setInterval(() => {
      if (spins >= maxSpins) {
        clearInterval(interval)
        setResult(finalItem)
        setIsSpinning(false)
      } else {
        const tempItem = cheesecakeItems[Math.floor(Math.random() * cheesecakeItems.length)]
        setResult(tempItem)
        spins++
      }
    }, 100)
  }

  return (
    <div className="menu-roulette">
      <h2>Cheesecake Roulette</h2>
      <button 
        className="spin-button"
        onClick={spinRoulette}
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      <RandomResult item={result} type="cheesecake" isSpinning={isSpinning} />
    </div>
  )
}

export default CheesecakeRoulette 