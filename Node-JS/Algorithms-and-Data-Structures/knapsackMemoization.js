const knapsackMemoization = (weightCap, weights, values) => {
  const numberOfItems = weights.length;
  const matrix = new Array(numberOfItems);

  for (let item = 0; item <= numberOfItems; item++) {
    matrix[item] = new Array(weightCap + 1);
    for (let weight = 0; weight <= weightCap; weight++) {
      if (item === 0 || weight === 0) {
        matrix[item][weight] = 0;
      } else if (weights[item - 1] <= weight) {
        const include = values[item - 1] + matrix[item - 1][weight - weights[item - 1]];
        const exclude = matrix[item - 1][weight];
        matrix[item][weight] = Math.max(include, exclude);
      } else {
        matrix[item][weight] = matrix[item - 1][weight];
      }
    }
  }
  return matrix[numberOfItems][weightCap];
};

module.exports = knapsackMemoization;
