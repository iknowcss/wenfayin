import Promise from 'bluebird';
import {createReadStream} from 'fs';

export const readFileLines = (filePath) => {
  const stream = createReadStream(filePath);
  const lines = [];

  let fileDataBuffer = '';
  return new Promise((fulfill, rej) => {
    stream.on('data', (data) => {
      fileDataBuffer += data;
      const newLines = fileDataBuffer.split('\n');
      fileDataBuffer = newLines.pop();
      newLines.forEach((line) => lines.push(line));
    });

    stream.on('end', () => {
      lines.push(fileDataBuffer);
      fulfill(lines);
    });
  });
};
