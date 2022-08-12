// Use this presets array inside your presetHandler
const presets = require("./presets");

// Complete this function:
const presetHandler = (requestType, index, newPresetArray) => {
  let returnArray = [200];
  if (!(index >= 0 && index < presets.length)) returnArray[0] = 404;
  if (!(requestType === "GET" || requestType === "PUT")) returnArray[0] = 400;
  if (requestType === "GET") returnArray[1] = presets[index];
  if (requestType === "PUT") {
    presets[index] = newPresetArray;
    returnArray[1] = newPresetArray;
  }
  return returnArray;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
