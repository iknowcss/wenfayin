import {readFileLines} from './util/file';

const COMMENT_REGEXP = /^\s*#/;

export default (filePath) => {
  return readFileLines(filePath)
    .then((lines) => {
      const entries = [];
      lines.slice(0, 100).forEach((line) => {
        if (COMMENT_REGEXP.test(line)) return;

        const [utfString, ...prons] = line.split('\t');
        entries.push([
          String.fromCharCode(parseInt(utfString, 16)),
          prons
        ]);
      });
      return entries;
    });
}

