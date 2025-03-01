function PriceRangeSlider({ range, onChange }) {
  const minPercent = ((range[0] - 0) * 100) / (50 - 0)
  const maxPercent = ((range[1] - 0) * 100) / (50 - 0)

  const formatPrice = (price) => {
    return price.toFixed(2)
  }

  return (
    <div className="price-range">
      <h3>Price Range</h3>
      <div className="price-display">
        ${formatPrice(range[0])} - ${formatPrice(range[1])}
      </div>
      <div className="slider-container">
        <div className="slider-track-container">
          <div 
            className="slider-track" 
            style={{
              left: minPercent + '%',
              right: (100 - maxPercent) + '%'
            }}
          ></div>
        </div>
        <input
          type="range"
          min="0"
          max="50"
          step="0.5"
          value={range[0]}
          onChange={(e) => {
            const newMin = parseFloat(e.target.value)
            if (newMin <= range[1]) {
              onChange([newMin, range[1]])
            }
          }}
        />
        <input
          type="range"
          min="0"
          max="50"
          step="0.5"
          value={range[1]}
          onChange={(e) => {
            const newMax = parseFloat(e.target.value)
            if (newMax >= range[0]) {
              onChange([range[0], newMax])
            }
          }}
        />
      </div>
    </div>
  )
}

export default PriceRangeSlider 