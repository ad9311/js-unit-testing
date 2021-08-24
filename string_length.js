function stringLength(string) {
  if (string.length > 1 && string.length < 11) {
    return string.length;
  } else {
    throw new Error('Strings excedes 10 characters');
  }
}

module.exports = stringLength;
