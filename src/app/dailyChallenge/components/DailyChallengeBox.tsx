import { useState } from "react";

export type DailyChallengeBoxComponentProps = {
  id: number;
  title: string;
  isChecked: boolean;
  points: number;
  handleUpdate: (id: number, isChecked: boolean) => void;
}

export function DailyChallengeBox({id, title, isChecked, points, handleUpdate}: DailyChallengeBoxComponentProps){
  const [isTempChecked, setTempChecked] = useState<boolean>(isChecked)

  function handleLocalUpdate(value: boolean){
    setTempChecked(value)
    handleUpdate(id, value)
  }

  return (
    <div className="flex flex-row border px-2 py-3 gap-x-2 justify-between rounded-lg">
      <div className="flex flex-row items-center gap-x-2">
        <input 
          type="checkbox" 
          name="check" 
          id="check" 
          checked={isTempChecked} 
          onChange={() => handleLocalUpdate(!isTempChecked)} 
          className="w-4 h-4"
        />
        <label htmlFor="check" className="capitalize">{title}</label>
      </div>

      <div className="flex flex-row justify-end items-start">
        <p className="text-xs lg:text-sm">Points: {points}</p>
      </div>
    </div>
  )
}