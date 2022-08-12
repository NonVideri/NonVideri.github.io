const path = require('path');
const fs = require('fs');
const insertLine = require('insert-line');
require('dotenv').config();
const folderPath = process.env.FOLDER_PATH;

const insertHeader = (filePath) => {
  const headerText = path.basename(filePath, '.md');
  const header = `# ${headerText.slice(0, 1).toUpperCase()}${headerText.slice(1)}`;
  insertLine(filePath)
    .content(header)
    .at(2)
    .then((err) => {
      if (err) throw new Error(err);
    });
};

const digForMdFiles = (filePath) => {
  fs.readdir(filePath, (error, files) => {
    if (error) return console.log('Error', error);

    files.forEach((file) => {
      if (file.endsWith('.md')) return insertHeader(`${filePath}/${file}`);
      else if (!file.includes('.')) digForMdFiles(`${filePath}/${file}`);
    });
  });
};

digForMdFiles(folderPath);
