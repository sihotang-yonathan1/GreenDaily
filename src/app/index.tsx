import { PropsWithChildren } from "react";
import { ReminderLayout } from "./reminder";
import { NavLink, Outlet } from "react-router";

export function MainAppGenericLayout({children}: PropsWithChildren){
  return (
    <div className="border bg-white w-full h-full p-2">
      {children}
    </div>
  )
}

export function DashboardLayout(){
  return (
    <div className="flex w-dvw h-dvh bg-[#90C67C] py-2 px-4">
      
      <div className="flex flex-col w-[60dvw]">
      <div className="flex flex-col h-[85dvh] bg-blue-50 p-1">
        <div className="flex py-2">
        <h3 className="text-2xl font-semibold">GreenDaily</h3>
        </div>

        <Outlet />
      </div>

      <div className="flex flex-col gap-y-1 my-2">
        <div className="flex col-start-1 col-end-3 justify-end">
        <NavLink to="/" className="border p-2">DailyChallenge</NavLink>
        </div>

        <div className="flex justify-end gap-x-1">
        <div className="flex">
          <NavLink to="calculator" className="border p-2">Kalkulator</NavLink>
        </div>

        <div className="flex">
          <NavLink to="/" className="border p-2">Kalkulator2</NavLink>
        </div>
        </div>

      </div>
      </div>

      <div className="flex flex-col w-[40dvw] p-4">
      <ReminderLayout>
      </ReminderLayout>
      
      </div>
    </div>
  )
}

export default function DashboardPage(){
  return (
    <DashboardLayout>
    </DashboardLayout>
  ) 
}
