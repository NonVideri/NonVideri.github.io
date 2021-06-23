import React, { useState, useEffect } from 'react';

export default function ClockDisplay (props) {
  const { timezone, isPrecise } = props;
  const [time, setTime] = useState(new Date());
  var intervalID;

  // Start clock
  const startInterval = () => {
    const oneSecond = 1000;
    let delay;
    if (isPrecise) {
      delay = oneSecond / 10;
    } else {
      delay = oneSecond;
    }
    intervalID = setInterval(() => {
    setTime(new Date())}, delay);
  };

  // Clock starts when mounted
  useEffect(() => startInterval(), []);
  // Component reloads after mode change
  // Clear clock when unmounted to save resources
  useEffect(() => {
    clearInterval(intervalID)
    startInterval()
    return () => {
      clearInterval(intervalID)
    }
  }, [isPrecise, timezone])
  // Render
  return (
    <div>
      {isPrecise
        ? time.toISOString() :
          timezone === 'local' ?
          time.toLocaleTimeString('en-US') :
          time.toLocaleTimeString('en-US', {timeZone: timezone})}
    </div>
  );
}