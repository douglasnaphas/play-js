function reverseSentence(sentence) {
  const a = sentence.split(/ /);
  const reversed = [];
  while (a.length > 0) {
    reversed.push(a.pop());
  }
  let reversedString = '';
  for (let i = 0; i < reversed.length; i++) {
    reversedString = reversedString + reversed[i];
    if (i < reversed.length - 1) {
      reversedString = reversedString + ' ';
    }
  }
  return reversedString;
}
export { reverseSentence };
