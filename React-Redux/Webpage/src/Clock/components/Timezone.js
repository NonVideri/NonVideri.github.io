import React from 'react';

export default function ClockTimezone (props) {
  const TIMEZONES = ['local', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]
  
  const handleChange = (e) => {
    let newTimezone = e.target.options[e.target.selectedIndex].dataset.timezone;
    props.setTimezone(newTimezone)
  }
  return (
    <select className="form-select" aria-label="Default select example" onChange={handleChange}>
      <option selected>Select a timezone</option>
      {TIMEZONES.map((zone) =>
        <option data-timezone={zone}>{zone === 'local' ? 'Local time' : zone >= 0 ? 'GMT+' + zone : 'GMT' + zone}</option>
      )}
    </select>
  )
}