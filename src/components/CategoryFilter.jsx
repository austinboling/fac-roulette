function CategoryFilter({ categories, selected, onChange }) {
  const toggleCategory = (category) => {
    if (selected.includes(category)) {
      onChange(selected.filter(c => c !== category))
    } else {
      onChange([...selected, category])
    }
  }

  return (
    <div className="category-filter">
      <h3>Categories</h3>
      <div className="category-checkboxes">
        {categories.map(category => (
          <label key={category} className="category-checkbox">
            <input
              type="checkbox"
              checked={selected.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter 