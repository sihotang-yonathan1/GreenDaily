import { PropsWithChildren, useState } from "react"

function ReminderLayout({children}: PropsWithChildren){
  const [activeTab, setActiveTab] = useState<'reminder' | 'settings'>('reminder')
  const [reminderTime, setReminderTime] = useState("")

  const handleSetReminder = () => {
    if (!reminderTime) return
    
    // Schedule notification
    window.ipcRenderer?.send("show-reminder-notification", {
      title: "Reminder Set",
      body: `Your reminder is set for ${reminderTime}`
    })
    
    setActiveTab('reminder')
  }

  return (
    <div className="flex flex-col bg-white w-full h-full px-1 py-1">
      {/* Header */}
      <div className="flex flex-col">
        {/* bell button */}
        <div className="flex justify-end gap-x-2">
          <p>bell</p>
        </div>

        {/* Tab content */}
        {activeTab === 'settings' ? (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Settings</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Set Reminder Time
                </label>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <button 
                onClick={handleSetReminder}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                disabled={!reminderTime}
              >
                Save Reminder Time
              </button>
            </div>
            <div className="mt-4">
              <button 
                onClick={() => setActiveTab('reminder')}
                className="text-sm text-blue-500"
              >
                ← Back to Reminder
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Original reminder tab content */}
            <div className="flex flex-row gap-x-1 py-2 w-full items-center">
              <div className="flex border rounded-2xl w-full">
                <input type="text" className="border-none outline-none px-2 py-2"/>
              </div>
              <button 
              onClick={() => setActiveTab('settings')}
              className="px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
                Set Reminder
              </button>
            </div>
          </>
        )}
      </div>

      {/* Only show children when in reminder tab */}
      {activeTab === 'reminder' && children}
      
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