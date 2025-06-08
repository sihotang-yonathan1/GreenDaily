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
