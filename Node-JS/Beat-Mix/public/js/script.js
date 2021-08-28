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
      return;
  }
};

const toggleDrum = (drumName, index) => {
  if (!(drumName && index >= 0 && index <= 16)) return;
  const drum = selectDrum(drumName);
  drum[index] = !drum[index];
};
