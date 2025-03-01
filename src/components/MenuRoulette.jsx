import { useState, useEffect } from 'react'
import CategoryFilter from './CategoryFilter'
import PriceRangeSlider from './PriceRangeSlider'
import RandomResult from './RandomResult'
import { foodItems, drinkItems } from '../data/menu'

function MenuRoulette({ type, title }) {
  const items = type === 'food' ? foodItems : drinkItems
  const categories = [...new Set(items.map(item => item.Category))]
  
  const [selectedCategories, setSelectedCategories] = useState(categories)
  const [priceRange, setPriceRange] = useState([0, 50])
  const [result, setResult] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const getFilteredItems = () => {
    return items.filter(item => {
      if (type === 'food') {
        return (
          selectedCategories.includes(item.Category) &&
          item.Price >= priceRange[0] &&
          item.Price <= priceRange[1]
        )
      } else {
        return selectedCategories.includes(item.Category)
      }
    })
  }

  const spinRoulette = () => {
    const filteredItems = getFilteredItems()
    if (filteredItems.length === 0) return

    setIsSpinning(true)
    const finalItem = filteredItems[Math.floor(Math.random() * filteredItems.length)]
    
    let spins = 0
    const maxSpins = 20 // Number of items to show during animation
    const interval = setInterval(() => {
      if (spins >= maxSpins) {
        clearInterval(interval)
        setResult(finalItem)
        setIsSpinning(false)
      } else {
        // Show a random item during spinning
        const tempItem = filteredItems[Math.floor(Math.random() * filteredItems.length)]
        setResult(tempItem)
        spins++
      }
    }, 100) // Adjust speed of animation here (lower = faster)
  }

  return (
    <div className="menu-roulette">
      <h2>{title}</h2>
      <CategoryFilter 
        categories={categories}
        selected={selectedCategories}
        onChange={setSelectedCategories}
      />
      {type === 'food' && (
        <PriceRangeSlider 
          range={priceRange}
          onChange={setPriceRange}
        />
      )}
      <button 
        className="spin-button"
        onClick={spinRoulette}
        disabled={selectedCategories.length === 0 || isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      <RandomResult item={result} type={type} isSpinning={isSpinning} />
    </div>
  )
}

export default MenuRoulette 