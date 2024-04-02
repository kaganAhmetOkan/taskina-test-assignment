export function compareStringArrays(arr1: string[], arr2: string[]) {
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  if (sortedArr1.length !== sortedArr2.length) return false;

  for (let i = 0; i < sortedArr2.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) return false;
  };

  return true;
};