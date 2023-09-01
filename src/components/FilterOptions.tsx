function FilterOptions({ filters, onFilterChange, filterProperties }) {
  return (
    <div className="flex flex-wrap gap-5 items-center ">
      <div>
        <label htmlFor="location">Location:</label>
        <input
          className="ml-1 border-2 rounded border-purple-400 p-1"
          type="text"
          id="location"
          value={filters.location}
          onChange={(e) => {
            onFilterChange("location", e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor="moveInDate">Move-in Date:</label>
        <input
          className="ml-1 border-2 rounded border-purple-400 p-1"
          type="date"
          id="moveInDate"
          value={filters.moveInDate}
          onChange={(e) => {
            onFilterChange("moveInDate", e.target.value)
          }}
        />
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-0 gap-5">
        <label>
          Price Range:
          <input
            className="ml-1 border-2 rounded border-purple-400 p-1"
            type="number"
            placeholder="Min Price - $1500"
            value={filters.minPrice}
            onChange={(e) => onFilterChange("minPrice", e.target.value)}
          />
          <input
            className="ml-1 border-2 rounded border-purple-400 p-1"
            type="number"
            placeholder="Max Price - $4000"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange("maxPrice", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="propertyType">Property Type:</label>
        <select
          className="ml-1 border-2 rounded border-purple-400 p-1"
          id="propertyType"
          value={filters.propertyType}
          onChange={(e) => {
            onFilterChange("propertyType", e.target.value)
          }}
        >
          <option value="">Any</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
        </select>
      </div>
      <button
        className="text-purple-400 font-semibold px-4 py-2 border-2 border-purple-400 rounded-lg hover:text-white hover:bg-purple-400 duration-200 "
        onClick={filterProperties}
      >
        Search
      </button>
    </div>
  )
}

export default FilterOptions
