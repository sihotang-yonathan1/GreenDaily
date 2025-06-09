import React, { PropsWithChildren, useState } from "react";
import { DailyTip } from './tips';
import styles from './style.module.css';


interface ReminderData {
  id: string;
  title: string;
  body: string;
  dateTime: string;
}

export function ReminderLayout(){
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
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.headerActions}>
          <button onClick={() => setActiveTab('settings')} className={styles.settingsButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.settingsIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.001 2.001 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.141 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        {activeTab === 'settings' ? (
          <div className={styles.settingsPanel}>
            <h2 className={styles.settingsTitle}>Pengaturan Reminder</h2>
            <div className={styles.formGroup}>
              <div>
                <label htmlFor="reminderMessage" className={styles.label}>
                  Pesan Reminder:
                </label>
                <input
                  type="text"
                  id="reminderMessage"
                  value={reminderMessage}
                  onChange={(e) => setReminderMessage(e.target.value)}
                  className={styles.input}
                  placeholder="Contoh: Matikan lampu!"
                />
              </div>
              
              <div>
                <label htmlFor="reminderDateTime" className={styles.label}>
                  Waktu Reminder:
                </label>
                <input
                  type="datetime-local"
                  id="reminderDateTime"
                  value={reminderDateTime}
                  onChange={(e) => setReminderDateTime(e.target.value)}
                  className={styles.input}
                />
              </div>
              
              <button 
                onClick={handleSetReminder}
                className={styles.submitButton}
                disabled={!reminderMessage || !reminderDateTime}
              >
                Atur Reminder
              </button>
            </div>
            {statusMessage && (
              <p className={`${styles.statusMessage} ${statusMessage.startsWith('Error') ? styles.errorMessage : styles.successMessage}`}>
                {statusMessage}
              </p>
            )}
            <div className="mt-4">
              <button 
                onClick={() => { setActiveTab('reminder'); setStatusMessage(''); }}
                className={styles.backButton}
              >
                ← Kembali ke Reminder
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.searchContainer}>
              <div className={styles.searchInput}>
                <input type="text" className={styles.searchInputField} placeholder="Cari Lokasi"/>
              </div>
              <button 
                onClick={() => setActiveTab('settings')}
                className={styles.setReminderButton}
              >
                Atur Reminder
              </button>
            </div>
          </>
        )}
      </div>

      {activeTab === 'reminder' && <ReminderPage reminders={activeReminders} />}
      
      <DailyTip />
    </div>
  );
}

interface ReminderPageProps {
  reminders: ReminderData[];
}

export function ReminderPage({ reminders = [] }: ReminderPageProps){
  return (
    <div className={styles.reminderList}>
      <p className={styles.reminderTitle}>Reminder Anda:</p>
      <ul className={styles.reminderItems}>
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
