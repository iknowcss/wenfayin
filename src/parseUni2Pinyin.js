import Promise from 'bluebird';
import {readFileLines} from './util/file';

const COMMENT_REGEXP = /^\s*#/;

export default (filePath) => {
  const entries = [];
  return new Promise((fulfill, reject) => {
    readFileLines(filePath, (err, line) => {
      if (line.EOF) return fulfill(entries);
      if (err) return reject(err);
      if (COMMENT_REGEXP.test(line)) return;

      const [utfString, ...prons] = line.split('\t');
      const hanzi = String.fromCharCode(parseInt(utfString, 16));
      entries.push([hanzi, prons]);
    });
  });
}

