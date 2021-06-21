import React, { useState, useEffect } from 'react';

export default function ClockDisplay (props) {
  const { timezone, isPrecise } = props;
  const [time, setTime] = useState(new Date());
  var intervalID;
  
  const getTimeZoneTimeObj = (timezone) => {
    let localdate = new Date()
    let timeZoneDate = new Date(localdate.getTime() + ((localdate.getTimezoneOffset()- timezone)*60*60*1000))
    return timeZoneDate
  }

  // Start clock
  const startInterval = () => {
    const oneSecond = 1000;
    let delay;
    if (isPrecise) {
      delay = oneSecond / 10;
    } else {
      delay = oneSecond;
    }
    if (timezone !== 'local') {
      intervalID = setInterval(() => {
      setTime(getTimeZoneTimeObj(timezone))}, delay);
    } else {
      intervalID = setInterval(() => {
      setTime(new Date())}, delay);
    }
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
        ? time.toISOString()
        : time.toLocaleTimeString()}
    </div>
  );
}