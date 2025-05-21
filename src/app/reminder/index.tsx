import { PropsWithChildren } from "react"

function ReminderLayout({children}: PropsWithChildren){
  return (
    <div className="flex flex-col bg-white w-full h-full px-1 py-1">
      {/* Header */}
      <div className="flex flex-col">
        {/* bell button */}
        <div className="flex justify-end">
          <p>bell</p>
        </div>

        {/* Tab button */}
        <div className="flex flex-row gap-x-1 py-2 w-full items-center">
          {/* Tab Item */}
          <div className="flex border rounded-2xl w-full">
            <input type="text" className="border-none outline-none px-2 py-2"/>
          </div>

          {/* Tab Item */}
          <div className="flex border px-2 rounded-3xl py-1 w-full text-xs">
            Notifikasi Reminder
          </div>
        </div>
      </div>

      {children}
      
      <div>
        <p>Hello World</p>
      </div>
    </div>
  )
}

export function ReminderPage(){
  return (
    <ReminderLayout>
      <p>Reminder here</p>
    </ReminderLayout>
  )
}