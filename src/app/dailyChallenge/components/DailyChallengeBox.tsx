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
    <div className="flex flex-row border p-2 gap-x-2 justify-between">
      <div className="flex flex-row items-center gap-x-2">
        <input 
          type="checkbox" 
          name="check" 
          id="check" 
          checked={isTempChecked} 
          onChange={() => handleLocalUpdate(!isTempChecked)} 
        />
        <label htmlFor="check" className="capitalize">{title}</label>
      </div>

      <div className="flex flex-row justify-end text-sm">
        <p>Points: {points}</p>
      </div>
    </div>
  )
}