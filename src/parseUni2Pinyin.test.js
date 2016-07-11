import path from 'path';
import consume from './parseUni2Pinyin';

const dataPath = path.join(__dirname, '../../../data/Uni2Pinyin');

describe('parseUniToPinyin', () => {
  it('does a thing', () => {
    return consume(dataPath)
      .then((entries) => {
        console.log('entries', entries);
      });
  });
});
