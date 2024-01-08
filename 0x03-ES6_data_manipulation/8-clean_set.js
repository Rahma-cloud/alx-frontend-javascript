export default function cleanSet(set, startString) {
  const setArray = Array.from(set);
  const filteredArray = setArray.filter((value) => value.startsWith(startString));
  const cleanedArray = filteredArray.map((value) => value.slice(startString.length));
  const resultString = cleanedArray.join('-');
  return resultString;
}
