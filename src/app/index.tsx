import { PropsWithChildren} from "react";
import { DailyChallengePage } from "./dailyChallenge";
import { ReminderPage } from "./reminder";


export function MainAppGenericLayout({children}: PropsWithChildren){
  return (
    <div className="border bg-white w-full h-full p-2">
      {children}
    </div>
  )
}

function DashboardLayout({children}: PropsWithChildren){
  return (
    <div className="flex flex-1/2 w-dvw h-dvh bg-amber-200 py-2 px-4">
      
      {/* Main Content */}
      <div className="flex flex-col w-[60dvw]">
        <div className="flex flex-col h-[85dvh] bg-blue-50 p-1">
          {/* Judul Aplikasi */}
          <div className="flex py-2">
            <h3 className="text-2xl font-semibold">GreenDaily</h3>
          </div>
          {children}
        </div>

        {/* Menu Selector */}
        <div className="flex flex-col gap-y-1 my-2">
          <div className="flex col-start-1 col-end-3 justify-end">
            <button className="border p-2">Hello1</button> 
          </div>

          <div className="flex justify-end gap-x-1">
            <div className="flex">
              <button className="border p-2">Hello2</button>
            </div>

            <div className="flex">
              <button className="border p-2">Hello2</button>
            </div>
          </div>

        </div>
      </div>

      {/* Reminder */}
      <div className="flex flex-col w-[40dvw] p-4">
        <ReminderPage />
      </div>
    </div>
  )
}

export default function DashboardPage(){
  return (
    <DashboardLayout>
      <DailyChallengePage />
    </DashboardLayout>
  ) 
}