import { PropsWithChildren } from "react";
import { ReminderLayout } from "./reminder/layout";
import { NavLink, Outlet } from "react-router";
import { DailyTip } from "./reminder/tips";

import GreenDailyIcon from "/green-daily-icon.png";

export function MainAppGenericLayout({children}: PropsWithChildren){
  return (
    <div className="border bg-white w-full h-full p-2">
      {children}
    </div>
  )
}

export function DashboardLayout() {
  return (
    <div className="flex w-full h-screen bg-[#90C67C] py-2 px-4">
      {/* Main Content Section (60% of the screen width) */}
      <div className="flex flex-col w-full md:w-[60vw]">
        <div className="flex flex-col h-[85vh] bg-blue-50 p-1 overflow-y-auto">
        <div className="flex py-2 items-center">
        <img src={GreenDailyIcon} alt="logo" width={40} height={40}/>
            <h3 className="text-2xl font-semibold">GreenDaily</h3>
          </div>

          <Outlet />
        </div>

        {/* NavBar (with responsive layout) */}
        <div className="flex flex-col gap-y-1 my-2">
          <div className="flex flex-wrap justify-end gap-x-1 gap-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col border p-2 w-full sm:w-24 h-14 text-wrap justify-end overflow-hidden ${
                  isActive ? 'bg-[#a7e8ab] text-gray-900 font-semibold' : 'text-black'
                }`
              }
            >
              <span className="text-xs">DailyChallenge</span>
            </NavLink>
            <NavLink
              to="/air-quality"
              className={({ isActive }) =>
                `flex flex-col border p-2 w-full sm:w-24 h-14 text-wrap justify-end overflow-hidden ${
                  isActive ? 'bg-[#a7e8ab] text-gray-900 font-semibold' : 'text-black'
                }`
              }
            >
              <span className="text-xs">Cek Kualitas Udara</span>
            </NavLink>
          </div>

          <div className="flex flex-wrap justify-end gap-x-1 gap-y-1">
            <NavLink
              to="calculator"
              className={({ isActive }) =>
                `flex flex-col border p-2 w-full sm:w-24 h-14 text-wrap justify-end overflow-hidden ${
                  isActive ? 'bg-[#a7e8ab] text-gray-900 font-semibold' : 'text-black'
                }`
              }
            >
              <span className="text-sm">Kalkulator</span>
            </NavLink>
          
            <NavLink
              to="reminder"
              className={({ isActive }) =>
                `hidden flex-col border p-2 w-full sm:w-24 h-14 text-wrap justify-end ${
                  isActive ? 'bg-[#a7e8ab] text-gray-900' : 'text-black'
                }`
              }
            >
              <span className="text-sm">Reminder</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Sidebar (40% of the screen width) */}
      <div className="flex flex-col w-full md:w-[40vw] p-4 overflow-hidden gap-y-4">
        <ReminderLayout />
        <DailyTip />
      </div>
    </div>
  );
}


export default function DashboardPage(){
  return (
    <DashboardLayout>
    </DashboardLayout>
  ) 
}
