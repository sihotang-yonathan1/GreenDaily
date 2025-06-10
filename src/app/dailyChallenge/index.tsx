import { useState, useEffect } from "react";
import { MainAppGenericLayout } from "../index";
import { DailyChallengeBox } from "./components/DailyChallengeBox";

interface DailyChallengeBoxProps {
  id: number;
  title: string;
  isChecked: boolean;
  points: number;
}

class DailyChallengeItem implements DailyChallengeBoxProps {
  id: number;
  title: string;
  isChecked: boolean;
  points: number;

  constructor(id: number, title: string, isChecked: boolean, points: number) {
    this.id = id;
    this.title = title;
    this.isChecked = isChecked;
    this.points = points;
  }

  showPoints() {
    console.log(this.points);
  }
}

function shuffleArray<T>(array: T[]): T[] {
  // Fisher-Yates shuffle algorithm
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function DailyChallengePage() {
  // Object
  const firstChallenge = new DailyChallengeItem(1, "Baca buku selama 30 menit", false, 100);
  const challengeData = [
    firstChallenge,
    new DailyChallengeItem(2, "Minum 8 gelas air", false, 20),
    new DailyChallengeItem(3, "Lakukan 10 push-up", false, 30),
    new DailyChallengeItem(4, "Meditasikan selama 10 menit", false, 40),
    new DailyChallengeItem(5, "Jalan kaki selama 20 menit", false, 60),
    new DailyChallengeItem(6, "Makan sayur-sayuran selama 1 kali makan", false, 70),
    new DailyChallengeItem(7, "Selesaikan tugas kecil yang tertunda", false, 50),
    new DailyChallengeItem(8, "Berolahraga selama 30 menit", false, 80),
    new DailyChallengeItem(9, "Menulis jurnal harian", false, 40),
    new DailyChallengeItem(10, "Berbicara dengan teman lama", false, 60),
    new DailyChallengeItem(11, "Menonton video edukasi selama 20 menit", false, 50),
    new DailyChallengeItem(12, "Beristirahat selama 15 menit tanpa perangkat elektronik", false, 30),
    new DailyChallengeItem(13, "Tulis 3 hal yang kamu syukuri hari ini", false, 20),
    new DailyChallengeItem(14, "Bersihkan ruang kerjamu", false, 40),
    new DailyChallengeItem(15, "Coba resep masakan baru", false, 70),
    new DailyChallengeItem(16, "Selesaikan puzzle atau teka-teki", false, 50),
    new DailyChallengeItem(17, "Ambil foto pemandangan alam", false, 60),
    new DailyChallengeItem(18, "Coba teknik pernapasan dalam", false, 30),
    new DailyChallengeItem(19, "Tonton video inspiratif", false, 40),
    new DailyChallengeItem(20, "Bermain game edukatif", false, 20),
  ];


  const [tempData, setTempData] = useState<DailyChallengeBoxProps[]>([]);

  // Fungsi untuk memuat tantangan untuk hari ini
  function loadDailyChallenges() {
    const today = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD

    // Periksa apakah sudah ada data yang disimpan untuk hari ini
    const storedDate = localStorage.getItem("lastChallengeDate");

    if (storedDate === today) {
      // Jika sudah ada, ambil data yang disimpan
      const storedChallenges = JSON.parse(localStorage.getItem("dailyChallenges") || "[]");
      setTempData(storedChallenges);
    } else {
      // Jika belum, acak data dan pilih tantangan untuk hari ini
      const shuffledData = shuffleArray(challengeData);

      // Tentukan berapa banyak tantangan yang akan ditampilkan
      const dailyChallenges = shuffledData.slice(0, 4);

      // Simpan tanggal dan data tantangan untuk hari ini
      localStorage.setItem("lastChallengeDate", today);
      localStorage.setItem("dailyChallenges", JSON.stringify(dailyChallenges));

      setTempData(dailyChallenges);
    }
  }

  useEffect(() => {
    loadDailyChallenges();
  }, []);

  const totalPoints = tempData
    .filter((item) => item.isChecked)
    .reduce((prevNum, currentItem) => prevNum + currentItem.points, 0);

  return (
    <MainAppGenericLayout>
      {/* Header */}
      <div className="flex flex-row pt-2 pb-3 items-center justify-between">
        {/* SubApp Title */}
        <div>
          <h3 className="font-semibold text-xl">Daily Challenge</h3>
        </div>

        {/* App Score */}
        <div>
          <p>Score: {totalPoints}</p>
        </div>
      </div>

      {/* Challenge items */}
      <div className="flex flex-col gap-y-2">
        {tempData.map((item) => (
          <DailyChallengeBox
            key={item.id}
            id={item.id}
            title={item.title}
            isChecked={item.isChecked}
            points={item.points}
            handleUpdate={(id: number, isChecked: boolean) => {
              const newData = tempData.map((item) =>
                item.id === id ? { ...item, isChecked: isChecked } : item
              );
              setTempData(newData);
            }}
          />
        ))}
      </div>
    </MainAppGenericLayout>
  );
}
