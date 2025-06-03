import { NavLink, Outlet } from "react-router"

export function CalculatorLayout(){
  return (
    <div className="flex flex-col h-full">
      {/* Tab */}
      <div className="flex flex-row w-full bg-amber-400 py-2 gap-x-2 justify-between px-[20%]">
        <NavLink to="/calculator">Price</NavLink>
        <NavLink to="byDevice">Device</NavLink>
      </div>
      {/* Child */}
      <Outlet />
    </div>
  )
}