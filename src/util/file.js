import {createReadStream} from 'fs';

export const readFileLines = (filePath, lineCb = () => {}) => {
  let fileDataBuffer = '';

  const stream = createReadStream(filePath);
  stream.on('data', (data) => {
    fileDataBuffer += data;
    const newLines = fileDataBuffer.split('\n');
    fileDataBuffer = newLines.pop();
    newLines.forEach((line) => lineCb(null, line));
  });

  stream.on('end', () => {
    lineCb(null, fileDataBuffer);
    lineCb(null, {EOF: true});
  });
};
