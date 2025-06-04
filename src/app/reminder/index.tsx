import React, { PropsWithChildren, useState } from "react";

interface ReminderData {
  id: string;
  title: string;
  body: string;
  dateTime: string;
}

declare global {
  interface Window {
    electronAPI: {
      sendReminder: (reminder: ReminderData) => void;
    };
  }
}

export function ReminderLayout({children}: PropsWithChildren){
  const [activeTab, setActiveTab] = useState<'reminder' | 'settings'>('reminder');
  const [reminderMessage, setReminderMessage] = useState<string>('');
  const [reminderDateTime, setReminderDateTime] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [activeReminders, setActiveReminders] = useState<ReminderData[]>([]);

  const handleSetReminder = () => {
    if (!reminderMessage || !reminderDateTime) {
      setStatusMessage('Pesan dan waktu reminder harus diisi.');
      return;
    }

    const targetDate = new Date(reminderDateTime);
    const now = new Date();

    if (targetDate <= now) {
      setStatusMessage('Waktu reminder harus di masa depan.');
      return;
    }

    if (window.electronAPI && window.electronAPI.sendReminder) {
      const newReminder: ReminderData = {
        id: Date.now().toString(),
        title: 'GreenDaily Reminder',
        body: reminderMessage,
        dateTime: targetDate.toISOString(),
      };
      window.electronAPI.sendReminder(newReminder);
      setStatusMessage(`Reminder "${newReminder.body}" diatur pada ${targetDate.toLocaleString()}.`);
      
      setActiveReminders(prevReminders => [...prevReminders, newReminder]);

      setActiveTab('reminder');
      setReminderMessage('');
      setReminderDateTime('');
    } else {
      setStatusMessage('Error: electronAPI tidak tersedia. Pastikan preload.ts sudah benar.');
      console.error('electronAPI.sendReminder not available');
    }
  };

  return (
    <div className="flex flex-col bg-white w-full h-full px-1 py-1">
      <div className="flex flex-col">
        <div className="flex justify-end gap-x-2">
          <button onClick={() => setActiveTab('settings')} className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.001 2.001 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.141 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        {activeTab === 'settings' ? (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h2 className="text-lg font-semibold mb-3">Pengaturan Reminder</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="reminderMessage" className="block text-sm font-medium text-gray-700">
                  Pesan Reminder:
                </label>
                <input
                  type="text"
                  id="reminderMessage"
                  value={reminderMessage}
                  onChange={(e) => setReminderMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  placeholder="Contoh: Matikan lampu!"
                />
              </div>
              
              <div>
                <label htmlFor="reminderDateTime" className="block text-sm font-medium text-gray-700">
                  Waktu Reminder:
                </label>
                <input
                  type="datetime-local"
                  id="reminderDateTime"
                  value={reminderDateTime}
                  onChange={(e) => setReminderDateTime(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              </div>
              
              <button 
                onClick={handleSetReminder}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!reminderMessage || !reminderDateTime}
              >
                Atur Reminder
              </button>
            </div>
            {statusMessage && (
              <p className={`mt-4 text-sm ${statusMessage.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {statusMessage}
              </p>
            )}
            <div className="mt-4">
              <button 
                onClick={() => { setActiveTab('reminder'); setStatusMessage(''); }}
                className="text-sm text-blue-500 hover:underline"
              >
                ← Kembali ke Reminder
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-row gap-x-1 py-2 w-full items-center">
              <div className="flex border rounded-2xl w-full">
                <input type="text" className="border-none outline-none px-2 py-2" placeholder="Cari Lokasi"/>
              </div>
              <button 
                onClick={() => setActiveTab('settings')}
                className="px-3 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 text-xs"
              >
                Atur Reminder
              </button>
            </div>
          </>
        )}
      </div>

      {activeTab === 'reminder' && <ReminderPage reminders={activeReminders} />}
      
      <div className="mt-auto p-3 bg-gray-100 rounded-md text-gray-600 text-center">
        <p>Hello World</p>
      </div>
    </div>
  );
}

interface ReminderPageProps {
  reminders: ReminderData[];
}


function ReminderRowBox({body, dateTime}: Omit<ReminderData, "id">){
  const dataLocalDate = new Date(dateTime).toLocaleString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="flex flex-col border py-2 px-1">
      <p>{body} pada {dataLocalDate}</p>
    </div>
  )
}

export function ReminderPage({ reminders = [] }: ReminderPageProps){
  return (
    <div className="p-4 text-gray-700 h-full">
      <p className="font-semibold mb-2">Reminder Anda:</p>
      
      <div className="flex flex-col w-full gap-y-2">
        {reminders.length > 0 && reminders.map((item) => <ReminderRowBox 
          key={item.id} 
          body={item.body} 
          dateTime={item.dateTime} 
          title={item.title}
        />)}
      </div>
      {reminders.length === 0 && 
        <div className="flex flex-col justify-center bg-amber-300 h-full items-center">
          <p className="font-semibold text-lg">Tidak ada Pengingat dibuat</p>
        </div>}
    </div>
  );
}
