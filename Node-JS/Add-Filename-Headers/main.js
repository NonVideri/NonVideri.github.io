const fs = require('fs');
require('dotenv').config();
const folderPath = process.env.FOLDER_PATH;

const insertHeader = (path) => {};

const digForMdFiles = (path) => {
  fs.readdir(path, (error, files) => {
    if (error) return console.log('Error', error);

    files.forEach((file) => {
      if (file.endsWith('.md')) return insertHeader(`${path}/${file}`);
      else if (!file.includes('.')) digForMdFiles(`${path}/${file}`);
    });
  });
};
