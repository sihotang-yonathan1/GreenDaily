import { NavLink, Outlet } from "react-router"

export function CalculatorLayout(){
  return (
    <div className="flex flex-col h-full">
      {/* Tab */}
      <div className="flex flex-row w-full py-2 gap-x-2 justify-between px-[20%]">
        <NavLink 
          to="/calculator"
          end
          className={({ isActive }) =>
            `flex flex-col border p-2 w-full sm:w-24 h-8 text-wrap justify-center overflow-hidden rounded-2xl text-center items-center ${
              isActive ? 'bg-[#a7e8ab] text-gray-900 font-semibold' : 'text-black'
            }`
          }
        >Price</NavLink>

        <NavLink 
          className={({ isActive }) =>
            `flex flex-col border p-2 w-full sm:w-24 h-8 text-wrap justify-center overflow-hidden rounded-2xl text-center items-center ${
              isActive ? 'bg-[#a7e8ab] text-gray-900 font-semibold' : 'text-black'
            }`
          }
          to="/calculator/byDevice"
          end
          >Device</NavLink>
      </div>
      {/* Child */}
      <Outlet />
    </div>
  )
}