import { useState, useEffect } from 'react';
import styles from './style.module.css';

const environmentalTips = [
  "Turn off lights when leaving a room to save energy",
  "Use a reusable water bottle instead of plastic bottles",
  "Take shorter showers to conserve water",
  "Bring your own shopping bags to reduce plastic waste",
  "Unplug electronics when not in use to save power",
  "Use public transportation or bike when possible",
  "Start composting your food waste",
  "Switch to LED light bulbs for energy efficiency",
  "Plant trees or start a small garden to improve air quality",
  "Use cloth napkins instead of paper napkins",
  "Fix leaky faucets to prevent water waste",
  "Use natural cleaning products to reduce chemical pollution",
  "Support local farmers and buy seasonal produce",
  "Reduce meat consumption one day a week",
  "Use cold water for laundry when possible",
  "Start recycling paper, plastic, and glass",
  "Use a reusable coffee cup for your daily coffee",
  "Turn off your computer at night",
  "Use rechargeable batteries instead of disposable ones",
  "Collect rainwater for watering plants",
  "Use both sides of paper when printing",
  "Repair items instead of replacing them",
  "Choose products with minimal packaging",
  "Use a pressure cooker to save energy while cooking",
  "Keep your vehicle's tires properly inflated for better fuel efficiency"
];

export function DailyTip() {
  const [currentTip, setCurrentTip] = useState("");

  useEffect(() => {
    // Get today's date to ensure same tip shows all day
    const today = new Date().toDateString();
    
    // Use date to get consistent tip for the day
    const tipIndex = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % environmentalTips.length;
    
    setCurrentTip(environmentalTips[tipIndex]);
  }, []);

  return (
    <div className="p-4 bg-green-50 border-t border-green-100">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-medium text-green-600">Daily Green Tip</h3>
        <p className="mt-2 font-medium text-green-800">{currentTip}</p>
      </div>
    </div>
  );
}