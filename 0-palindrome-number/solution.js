var isPalindrome = function (x) {
  // check param validity
  if (x == null || isNaN(x)) return;

  // convert x to string and reverse it, return if it's equal to string x.
  return String(x).split("").reverse().join("") === String(x);
};
