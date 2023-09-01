function PropertyList({ properties }) {
  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold my-6">Property List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
        {properties.map((property, index) => (
          <div className="border rounded-xl shadow-xl" key={index}>
            <h3>{property.name}</h3>
            <img className="rounded-t-xl" src={property.image} alt="" />
            <div className="p-2">
              <p className="text-lg font-bold text-purple-600">
                ${property.price}
                <p className="inline text-sm font-normal">/month</p>
              </p>
              <p className="text-xl font-bold">{property.location}</p>
              <p>
                <p className="inline font-semibold">Move-in Date:</p>{" "}
                {property.moveInDate}
              </p>
              <p className="">
                <p className="inline font-semibold">Location:</p>{" "}
                {property.propertyType}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyList
