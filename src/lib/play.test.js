import { reverseSentence } from './play';
describe('play', () => {
  test('reverse string 1', () => {
    expect(reverseSentence('hi there')).toEqual('there hi');
  });
  test('reverse string 2', () => {
    expect(reverseSentence('another sentence')).toEqual('sentence another');
  });
});
