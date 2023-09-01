const Navbar = () => {
  return (
    <div className="px-8 py-4 flex items-center justify-between border h-20">
      <div className="hidden lg:flex items-center space-x-12 duration-200 transition-all ease-in-out">
        <button className="text-2xl font-bold">Estatery</button>
        <div className="flex items-center space-x-6">
          <button className="rounded-lg text-gray-600 hover:bg-purple-100 px-4 py-2 hover:text-purple-500 font-bold  duration-200 ">
            Rent
          </button>
          <button className="rounded-lg text-gray-600 hover:bg-purple-100 px-4 py-2 hover:text-purple-500 font-bold  duration-200 ">
            Buy
          </button>
          <button className="rounded-lg text-gray-600 hover:bg-purple-100 px-4 py-2 hover:text-purple-500 font-bold  duration-200 ">
            Sell
          </button>
          <select
            className="rounded-lg cursor-pointer text-gray-600 hover:bg-purple-100 px-2 py-2 hover:text-purple-500 font-bold  duration-200 "
            name=""
            id=""
          >
            <option value=""> Manage Property</option>
          </select>
          <select
            className="rounded-lg cursor-pointer text-gray-600 hover:bg-purple-100 px-2 py-2 hover:text-purple-500 font-bold  duration-200 "
            name=""
            id=""
          >
            <option value=""> Resourses</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-4 ">
        <button className="text-purple-400 font-semibold px-4 py-2 border border-purple-300 rounded-lg hover:text-white hover:bg-purple-400 duration-200 ">
          Login
        </button>
        <button className="text-purple-400 font-semibold px-4 py-2 border border-purple-300 rounded-lg hover:text-white hover:bg-purple-400 duration-200">
          Signup
        </button>
      </div>
    </div>
  )
}

export default Navbar
