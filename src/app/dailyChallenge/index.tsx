import { useState } from "react";
import { MainAppGenericLayout } from "../index";
import { DailyChallengeBox } from "./components/DailyChallengeBox";

interface DailyChallengeBoxProps {
  id: number;
  title: string;
  isChecked: boolean;
  points: number;
}


class DailyChallengeItem implements DailyChallengeBoxProps {
  // property
  id: number;
  title: string;
  isChecked: boolean;
  points: number;

  constructor (id: number, title: string, isChecked: boolean, points: number){
    this.id = id;
    this.title = title;
    this.isChecked = isChecked;
    this.points = points;
  }

  // methods
  showPoints(){
    console.log(this.points)
  }
}


export function DailyChallengePage(){
  // Object
  let firstChallenge = new DailyChallengeItem(1, "hello world", true, 100);
  
  const challengeData = [
    firstChallenge,
    new DailyChallengeItem(2, "hello world", true, 100)
  ]

  const [tempData, setTempData] = useState<DailyChallengeBoxProps[]>(challengeData)

  // TODO: handle state using zustand (maybe a bit overkill?)
  function handleUpdate(id: number, isChecked: boolean){
    const newData = tempData.map((item) => item.id === id ? {...item, isChecked: isChecked} : item)
    setTempData(newData)
  }

  const totalPoints = tempData
    .filter((item) => item.isChecked)
    .reduce((prevNum, currentItem) => prevNum + currentItem.points, 0 )
  
  return (
    <MainAppGenericLayout>
      {/* Header */}
      <div className="flex flex-row pt-2 pb-3 items-center justify-between">  
        {/* SubApp Title */}
        <div>
          <h3 className="font-semibold text-xl">Daily Challenge</h3>
        </div>

        {/* App Score */}
        {/* TODO: set score function */}
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
            handleUpdate={handleUpdate}
          />
          )
        )}
      </div>
    </MainAppGenericLayout>
  )
}