import React, { useState } from 'react';

export default function ClockTimezone () {
  const TIMEZONES = ["+0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10", "+11", "+12", "-11", "-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1"]
  const [timezone, setTimezone] = useState({
    zone: "GMT+2"
  })
  const handleChange = (event) => {
    setTimezone({
      zone: event.target.value
    })
  }
  return (
    <select className="form-select" aria-label="Default select example" onChange={handleChange}>
      <option selected>Select a timezone</option>
      {TIMEZONES.map((z, i) =>
      <option value={i}>GMT{z}</option>
      )}
    </select>)
}