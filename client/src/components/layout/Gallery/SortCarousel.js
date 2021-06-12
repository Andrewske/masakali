export const SortCarousel = (list, key) => {
  const l = list.length;
  let start = [];
  let end = [];

  for (let i = 0; i < l; i++) {
    if (i < key) {
      end.push(list[i]);
    } else {
      start.push(list[i]);
    }
  }

  return [...start, ...end];
};
