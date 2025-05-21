import { useState } from "react";
import { MainAppGenericLayout } from "../index";

type DailyChallengeBoxProps = {
  title: string;
  isChecked: boolean;
  points: number;
}

function DailyChallengeBox({title, isChecked, points}: DailyChallengeBoxProps){
  const [isTempChecked, setTempChecked] = useState<boolean>(isChecked)
  return (
    <div className="flex flex-row border p-2 gap-x-2">
      <input 
        type="checkbox" 
        name="check" 
        id="check" 
        checked={isChecked} 
        onChange={() => setTempChecked(() => !isTempChecked)} 
      />
      <label htmlFor="check" className="capitalize">{title}</label>
    </div>
  )
}

export function DailyChallengePage(){
  const challengeData: DailyChallengeBoxProps[] =[{
    title: "Hello World",
    isChecked: true,
    points: 100

  }, { 
    title: "Hello World",
    isChecked: true,
    points: 100

  }]
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
          <p>Score: xxx</p>
        </div>
      </div>

      {/* Challenge items */}
      <div className="flex flex-col gap-y-2">
        {challengeData.map((item) => (
          <DailyChallengeBox 
            title={item.title} 
            isChecked={item.isChecked} 
            points={item.points} />
          )
        )}
      </div>
    </MainAppGenericLayout>
  )
}