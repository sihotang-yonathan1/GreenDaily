import { PropsWithChildren } from "react";
import { ReminderLayout } from "./reminder";
import { NavLink, Outlet } from "react-router";
import { ElectricitySavingTips } from './energyCalculator/ElectricitySavingTips';

export function MainAppGenericLayout({children}: PropsWithChildren){
  return (
    <div className="border bg-white w-full h-full p-2">
      {children}
    </div>
  )
}

export function DashboardLayout(){
  return (
    <div className="flex w-dvw h-dvh bg-amber-200 py-2 px-4">
      
      <div className="flex flex-col w-[60dvw]">
        <div className="flex flex-col h-[85dvh] bg-blue-50 p-1">
          <div className="flex py-2">
            <h3 className="text-2xl font-semibold">GreenDaily</h3>
          </div>

          <Outlet />
        </div>

        <div className="flex flex-col gap-y-1 my-2">
          <div className="flex col-start-1 col-end-3 justify-end gap-x-1">
            <NavLink to="/" className="flex flex-col border p-2 w-24 h-14 text-wrap justify-end overflow-hidden">
              <span className="flex w-full text-xs">DailyChallenge</span>
            </NavLink>
            {/* <NavLink to="/" className="border p-2">DailyChallenge</NavLink>
            <NavLink to="/air-quality" className="border p-2">Cek Kualitas Udara</NavLink> //penambahan link ke halaman cek kualitas udara */}
            <NavLink to="/air-quality" className="flex flex-col border p-2 w-24 h-14 text-wrap justify-end overflow-hidden">
              <span className="flex w-full text-xs">Cek Kualitas Udara</span>
            </NavLink>
          </div>

          <div className="flex justify-end gap-x-1">
            <div className="flex">
              {/* FIXME: not implemented yet */}
              <NavLink to="calculator" className="flex flex-col border p-2 w-24 h-14 text-wrap justify-end overflow-hidden">
                <span className="text-sm">Kalkulator</span>
              </NavLink>
            </div>

            <div className="flex">
              {/* FIXME: not implemented yet */}
              <NavLink to="/" className="flex flex-col border p-2 w-24 h-14 text-wrap justify-end">
                <span className="text-sm">Reminder</span>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col w-[40dvw] p-4 overflow-hidden gap-y-4">
        <ReminderLayout />
        
        <ElectricitySavingTips />
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
