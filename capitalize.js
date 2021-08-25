function capitalize(string) {
  if (typeof string === 'string') {
    return string.toUpperCase();
  } else {
    throw new Error(`${string} is not a string.`);
  }
}

export default capitalize;
