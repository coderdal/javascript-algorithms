const lengthOfLastWord = (str) => {
  return str.trim().split(" ").at(-1).length || 0
}
