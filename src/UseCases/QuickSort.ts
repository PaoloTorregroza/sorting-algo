function swapArrays(list: number[], start: number, end: number) {
  [list[start], list[end]] = [list[end], list[start]];
}

function partition(list: number[], start: number, end: number) {
  const pivot = list[Math.floor((start + end) / 2)];

  let s = start;
  let e = end;

  while (s <= e) {
    while (list[s] < pivot) {
      s++;
    }

    while (list[e] > pivot) {
      e--;
    }

    if (s <= e) {
      swapArrays(list, s, e);
      s++;
      e--;
    }
  }

  return s;
}

function quickSort(list: number[], start: number, end: number) {
  let p: number;

  if (list.length > 1) {
    p = partition(list, start, end);

    if (start < p - 1) {
      quickSort(list, start, p - 1);
    }

    if (p < end) {
      quickSort(list, p, end);
    }
  }

  return list;
}

export default quickSort;
