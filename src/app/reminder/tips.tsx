import { useState, useEffect } from 'react';

interface TipsBoxRowProps {
  _message: string;
}

class TipsClass implements TipsBoxRowProps {
  _message: string;

  constructor (message: string){
    this._message = message;
  }

  showMessage(){
    console.log(this._message)
  }

  getMessage(){
    return this._message
  }
}

const environmentalTips = [
  new TipsClass("Turn off lights when leaving a room to save energy"),
  new TipsClass("Use a reusable water bottle instead of plastic bottles"),
  new TipsClass("Take shorter showers to conserve water"),
  new TipsClass("Bring your own shopping bags to reduce plastic waste"),
  new TipsClass("Unplug electronics when not in use to save power"),
  new TipsClass("Use public transportation or bike when possible"),
  new TipsClass("Start composting your food waste"),
  new TipsClass("Switch to LED light bulbs for energy efficiency"),
  new TipsClass("Plant trees or start a small garden to improve air quality"),
  new TipsClass("Use cloth napkins instead of paper napkins"),
  new TipsClass("Fix leaky faucets to prevent water waste"),
  new TipsClass("Use natural cleaning products to reduce chemical pollution"),
  new TipsClass("Support local farmers and buy seasonal produce"),
  new TipsClass("Reduce meat consumption one day a week"),
  new TipsClass("Use cold water for laundry when possible"),
  new TipsClass("Start recycling paper, plastic, and glass"),
  new TipsClass("Use a reusable coffee cup for your daily coffee"),
  new TipsClass("Turn off your computer at night"),
  new TipsClass("Use rechargeable batteries instead of disposable ones"),
  new TipsClass("Collect rainwater for watering plants"),
  new TipsClass("Use both sides of paper when printing"),
  new TipsClass("Repair items instead of replacing them"),
  new TipsClass("Choose products with minimal packaging"),
  new TipsClass("Use a pressure cooker to save energy while cooking"),
  new TipsClass("Keep your vehicle's tires properly inflated for better fuel efficiency"),
];

export function DailyTip() {
  const [currentTip, setCurrentTip] = useState("");

  useEffect(() => {
    // Get today's date to ensure same tip shows all day
    const today = new Date().toDateString();
    
    // Use date to get consistent tip for the day
    const tipIndex = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % environmentalTips.length;
    
    setCurrentTip(environmentalTips[tipIndex].getMessage());
  }, []);

  return (
    // Added rounded-lg, shadow-sm, mt-auto for card-like appearance
    <div className="p-4 bg-green-50 border-t border-green-100 rounded-lg shadow-sm mt-auto"> 
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-medium text-green-600">Daily Green Tip</h3>
        <p className="mt-2 font-medium text-green-800">{currentTip}</p>
      </div>
    </div>
  );
}
