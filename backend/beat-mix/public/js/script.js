// Drum Arrays
let kicks = Array.from({ length: 16 }, i => false);
let snares = Array.from({ length: 16 }, i => false);
let hiHats = Array.from({ length: 16 }, i => false);
let rideCymbals = Array.from({ length: 16 }, i => false);

const selectDrum = drumName => {
  switch (drumName) {
    case "kicks":
      return kicks;
    case "snares":
      return snares;
    case "hiHats":
      return hiHats;
    case "rideCymbals":
      return rideCymbals;
    default:
      return null;
  }
};

const toggleDrum = (drumName, index) => {
  if (!(drumName && index >= 0 && index <= 16)) return;
  const drum = selectDrum(drumName);
  drum[index] = !drum[index];
};

const clear = drumName => {
  const drum = selectDrum(drumName);
  if (drum === null) {
    return;
  }
  drum.fill(false);
};

const invert = drumName => {
  const drum = selectDrum(drumName);
  if (drum === null) {
    return;
  }
  drum.forEach((e, i, arr) => {
    arr[i] = !e;
  });
};

const getNeighborPads = (x, y, size) => {
  let neighbors = [];
  if (x < 0 || y < 0 || x > size - 1 || y > size - 1) return neighbors;
  const topY = y + 1;
  const bottomY = y - 1;
  const rightX = x + 1;
  const leftX = x - 1;
  if (!(topY > size - 1)) neighbors.push([x, topY]);
  if (!(bottomY < 0)) neighbors.push([x, bottomY]);
  if (!(rightX > size - 1)) neighbors.push([rightX, y]);
  if (!(leftX < 0)) neighbors.push([leftX, y]);
  return neighbors;
};
