const singleNumber = (nums) => {
  if (!nums || nums.length <= 0) {
    throw new Error("Invalid parameter.");
  }

  // create storage
  const memory = new Set();

  for (let num of nums) {
    if (memory.has(num)) {
      memory.delete(num);
    } else {
      memory.add(num);
    }
  }

  // return first & filtered element
  return Array.from(memory)[0];
};
