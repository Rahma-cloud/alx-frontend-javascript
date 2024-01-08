export default function cleanSet(set, startString) {
  const setArray = Array.from(set);
  const cleanedArray = setArray
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  return cleanedArray.join('-');
}
