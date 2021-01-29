function merge(left: number[], right: number[]): number[] {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex != left.length) {
    for (let i = leftIndex; i < left.length; i++) {
      result.push(left[i]);
    }
  }

  if (rightIndex != right.length) {
    for (let i = rightIndex; i < right.length; i++) {
      result.push(right[i]);
    }
  }
  return result;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length > 1) {
    const middle = Math.round(arr.length / 2);
    let result: number[];
    let left = [];
    let right = [];

    for (let i = 0; i < middle; i++) {
      left.push(arr[i]);
    }

    for (let i = middle; i < arr.length; i++) {
      right.push(arr[i]);
    }

    left = mergeSort(left);
    right = mergeSort(right);

    if (left[left.length - 1] <= right[0]) {
      result = left.concat(right);
      return result;
    }

    result = merge(left, right);
    return result;
  }
  return arr;
}

export default mergeSort;
