import styles from './style.module.css';

interface ReminderData {
  id: string;
  title: string;
  body: string;
  dateTime: string;
}

interface ReminderPageProps {
  reminders: ReminderData[];
  onDeleteReminder: (id: string) => void; // Prop baru untuk fungsi penghapusan
}

export function ReminderPage({ reminders = [], onDeleteReminder }: ReminderPageProps){
  return (
    <div className={styles.reminderList}>
      <p className={styles.reminderTitle}>Reminder Anda:</p>
      <ul className={styles.reminderItems}>
        {reminders.length > 0 ? (
          reminders.map(reminder => (
            <li key={reminder.id}>
              <span className={styles.reminderBody}>{reminder.body}</span> 
              <span className={styles.reminderTime}>pada {new Date(reminder.dateTime).toLocaleString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</span>
              {/* Tombol Hapus dengan SVG Icon */}
              <button
                onClick={() => onDeleteReminder(reminder.id)}
                className={styles.deleteReminderButton}
                aria-label={`Hapus reminder "${reminder.body}"`}
              >
                {/* Ikon tempat sampah SVG (sama dengan yang di CalculatorDeviceRow) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.deleteReminderIcon}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </li>
          ))
        ) : (
          <li>Tidak ada reminder yang diatur.</li>
        )}
      </ul>
    </div>
  );
}
