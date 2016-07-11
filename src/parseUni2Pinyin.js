import Promise from 'bluebird';
import {readFileLines} from './util/file';

const COMMENT_REGEXP = /^\s*#/;

export default class Uni2PinyinMap {
  constructor(entries) {
    this.entries = entries;
  }
  
  getPinyin(hanzi) {
    return this.entries[hanzi];
  }
}

Uni2PinyinMap.init = (filePath) => {
  const entries = {};
  return new Promise((fulfill, reject) => {
    readFileLines(filePath, (err, line) => {
      if (line.EOF) return fulfill(new Uni2PinyinMap(entries));
      if (err) return reject(err);
      if (COMMENT_REGEXP.test(line)) return;

      const [utfString, ...prons] = line.split('\t');
      const hanzi = String.fromCharCode(parseInt(utfString, 16));
      entries[hanzi] = prons;
    });
  });
};
