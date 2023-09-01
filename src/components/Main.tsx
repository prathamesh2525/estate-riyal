import { useState, useCallback } from "react"
import FilterOptions from "./FilterOptions"
import PropertyList from "./PropertyList"
import data from "../assets/data.json"

const Main = () => {
  const [properties, setProperties] = useState(data || [])
  const [filters, setFilters] = useState({
    location: "",
    moveInDate: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "",
  })

  const filterProperties = () => {
    const filteredProperties = data.filter((property) => {
      const { location, moveInDate, propertyType } = filters
      const propertyPrice = property.price

      const locationMatch =
        !location ||
        property.location.toLowerCase().includes(location.toLowerCase())
      const moveInDateMatch = !moveInDate || property.moveInDate === moveInDate
      const propertyTypeMatch =
        !propertyType || property.propertyType === propertyType

      const minPrice = filters.minPrice ? parseInt(filters.minPrice) : 0
      const maxPrice = filters.maxPrice
        ? parseInt(filters.maxPrice)
        : Number.MAX_VALUE
      const priceInRange =
        propertyPrice >= minPrice && propertyPrice <= maxPrice

      return (
        locationMatch && moveInDateMatch && propertyTypeMatch && priceInRange
      )
    })
    setProperties(filteredProperties)
    setFilters({
      location: "",
      moveInDate: "",
      minPrice: "",
      maxPrice: "",
      propertyType: "",
    })
  }

  const onFilterChange = useCallback((filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }))
  }, [])

  return (
    <div className="flex w-full justify-center text-gray-800">
      <div className="mt-16 flex flex-col items-center justify-center space-y-4 sm:w-96 md:w-[720px] lg:w-[840px] xl:w-[1240px] p-3">
        <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:px-8 lg:py-4 lg:flex-row lg:justify-between lg:items-center w-full">
          <div className="text-3xl font-bold">Search properties to rent</div>
          <div>
            <select
              disabled
              className="p-2 border-2 border-purple-400"
              name=""
              id=""
            >
              <option className="font-bold text-gray-700" value="">
                Search with Search Bar
              </option>
            </select>
          </div>
        </div>
        <FilterOptions
          filters={filters}
          filterProperties={filterProperties}
          onFilterChange={onFilterChange}
        />
        <PropertyList
          filterProperties={filterProperties}
          properties={properties}
        />
      </div>
    </div>
  )
}

export default Main
