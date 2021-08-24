function reverseString(string) {
  let rString = [];
  [...string].forEach((char) => { rString.unshift(char)});
  return rString.toString().replace(/[,]/g, '');
}

module.exports = reverseString;
