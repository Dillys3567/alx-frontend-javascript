export default function cleanSet(set, startString) {
  if (startString === "") {
    return "";
  }
  const arr = Array.from(set);
  return arr
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length))
    .join("-");
}
