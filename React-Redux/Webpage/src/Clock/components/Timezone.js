import React from "react";

export default function ClockTimezone(props) {
  const TIMEZONES = {
    "local": "local",
    "UTC+0": "Etc/GMT-0",
    "UTC+1": "Etc/GMT-1",
    "UTC+2": "Etc/GMT-2",
    "UTC+3": "Etc/GMT-3",
    "UTC+4": "Etc/GMT-4",
    "UTC+5": "Etc/GMT-5",
    "UTC+6": "Etc/GMT-6",
    "UTC+7": "Etc/GMT-7",
    "UTC+8": "Etc/GMT-8",
    "UTC+9": "Etc/GMT-9",
    "UTC+10": "Etc/GMT-10",
    "UTC+11": "Etc/GMT-11",
    "UTC+12": "Etc/GMT-12",
    "UTC-11": "Etc/GMT+11",
    "UTC-10": "Etc/GMT+10",
    "UTC-9": "Etc/GMT+9",
    "UTC-8": "Etc/GMT+8",
    "UTC-7": "Etc/GMT+7",
    "UTC-6": "Etc/GMT+6",
    "UTC-5": "Etc/GMT+5",
    "UTC-4": "Etc/GMT+4",
    "UTC-3": "Etc/GMT+3",
    "UTC-2": "Etc/GMT+2",
    "UTC-1": "Etc/GMT+1"
  };

  const handleChange = e => {
    let newTimezone = e.target.options[e.target.selectedIndex].dataset.timezone;
    props.setTimezone(newTimezone);
  };
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={handleChange}
      defaultValue="Select a timezone">
      {Object.keys(TIMEZONES).map(zone => (
        <option data-timezone={TIMEZONES[zone]} key={zone}>
          {zone === "local" ? "Local time" : zone}
        </option>
      ))}
    </select>
  );
}
