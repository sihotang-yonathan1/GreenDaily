interface ReminderData {
  id: string;
  title: string;
  body: string;
  dateTime: string;
}

export function ReminderRowBox({body, dateTime}: Omit<ReminderData, "id">){
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