import { PropsWithChildren } from "react"
import { useState } from "react"

function ReminderLayout({children}: PropsWithChildren){
  const [activeTab, setActiveTab] = useState("notifikasi")

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
          <div
            className={`flex border px-2 rounded-3xl py-1 w-full text-xs cursor-pointer ${activeTab === "notifikasi" ? "bg-gray-200" : ""}`}
            onClick={() => setActiveTab("notifikasi")}
          >
            Notifikasi Reminder
          </div>
        </div>
      </div>

      {/* Only show children if Notifikasi Reminder tab is active */}
      {activeTab === "notifikasi" && children}
      
      <div>
        <p>Hello World</p>
      </div>
    </div>
  )
}

export function ReminderPage(){
  const [reminderTime, setReminderTime] = useState("")

  function handleSetReminder() {
    // Untuk set reminder time
    if (!reminderTime) return
    const now = new Date()
    const [hours, minutes] = reminderTime.split(":").map(Number)
    const target = new Date(now)
    target.setHours(hours, minutes, 0, 0)
    let delay = target.getTime() - now.getTime()
    if (delay < 0) delay += 24 * 60 * 60 * 1000 // ke hari berikutnya kalau sudah lewat

    setTimeout(() => {
      window.ipcRenderer?.send("show-reminder-notification", {
        title: "Reminder",
        body: "It's time for your reminder!",
      })
    }, delay)
    alert("Reminder set!")
  }
  
  return (
    <ReminderLayout>
      <div>
        <input
          type="time"
          value={reminderTime}
          onChange={e => setReminderTime(e.target.value)}
        />
        <button onClick={handleSetReminder}>Set Reminder</button>
      </div>
      <p>Reminder here</p>
    </ReminderLayout>
  )
}