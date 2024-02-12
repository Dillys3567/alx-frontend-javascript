export default function updateUniqueItems(map) {
  try {
    map.forEach((val, key) => {
      if (val === 1) {
        map.set(key, 100);
      }
    });
  } catch (e) {
    throw Error("Cannot process");
  }
  return map;
}
