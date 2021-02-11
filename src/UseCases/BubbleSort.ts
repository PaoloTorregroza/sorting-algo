import Step from '@/Domain/Step';
import createStepsArr from '../Utils/createStepsArr';

function bubbleSort(list: number[]): Step[][] {
  const res = [];

  const n = list.length;
  const readyValues: number[] = [];
  let changingValues: number[] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      changingValues = [j, j + 1];
      res.push(createStepsArr(list, readyValues, changingValues));
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
    readyValues.push(list.length - 1 - i);
    res.push(createStepsArr(list, readyValues, changingValues));
  }
  return res;
}

export default bubbleSort;
