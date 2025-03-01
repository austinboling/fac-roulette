function RandomResult({ item, type, isSpinning }) {
  if (!item) return (
    <div className="result empty">
      <p>Select categories and spin!</p>
    </div>
  )

  return (
    <div className={`result ${isSpinning ? 'spinning' : ''}`}>
      <h3 style={{ marginBottom: '0.1rem' }}>{item.Item}</h3>
      <p>{item.Category}</p>
      {type === 'food' && (
        <p className="price">${item.Price.toFixed(2)}</p>
      )}
    </div>
  )
}

export default RandomResult 