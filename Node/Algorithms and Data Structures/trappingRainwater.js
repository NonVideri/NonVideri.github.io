const trappingRainwater = heights => {
  let water = 0;
  let leftBound = 0;
  let rightBound = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]) {
      leftBound = Math.max(heights[leftPointer], leftBound);
      water += leftBound - heights[leftPointer];
      leftPointer++;
    } else {
      rightBound = Math.max(heights[rightPointer], rightBound);
      water += rightBound - heights[rightPointer];
      rightPointer--;
    }
  }
  return water;
};

module.exports = trappingRainwater;
