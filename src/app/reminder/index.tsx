import styles from './style.module.css';

interface ReminderData {
  id: string;
  title: string;
  body: string;
  dateTime: string;
}

interface ReminderPageProps {
  reminders: ReminderData[]; // Keep reminders prop for compatibility with ReminderLayout
}

export function ReminderPage({ reminders = [] }: ReminderPageProps){
  return (
    // Menggunakan kelas dari style.module.css untuk styling utama
    <div className={styles.reminderList}> 
      <p className={styles.reminderTitle}>Reminder Anda:</p>
      <ul className={styles.reminderItems}>
        {/* Menampilkan daftar reminder jika ada, atau pesan default jika kosong */}
        {reminders.length > 0 ? (
          reminders.map(reminder => (
            <li key={reminder.id}>
              {reminder.body} pada {new Date(reminder.dateTime).toLocaleString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </li>
          ))
        ) : (
          <li>Tidak ada reminder yang diatur.</li>
        )}
      </ul>
    </div>
  );
}
