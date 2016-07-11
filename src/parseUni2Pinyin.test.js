import path from 'path';
import Uni2PinyinMap from './parseUni2Pinyin';

const DATA_PATH = path.join(__dirname, '../../../data/Uni2Pinyin');

describe('Uni2PinyinMap', () => {
  describe('init', () => {
    it('builds a new map from provided file', () => {
      return Uni2PinyinMap.init(DATA_PATH)
        .then(map => {
          expect(map).to.be.instanceof(Uni2PinyinMap);
        });
    });
  });

  describe('mapping', () => {
    let y2pMap;

    before(() => {
      return Uni2PinyinMap.init(DATA_PATH)
        .then(map => y2pMap = map);
    });

    it('gets the possible pronunciations of a character', () => {
      expect(y2pMap.getPinyin('我')).to.eql(['wo3']);
      expect(y2pMap.getPinyin('乐')).to.eql(['le4', 'yue4']);
    });
  });
});
