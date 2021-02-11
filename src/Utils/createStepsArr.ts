import Step from '../Domain/Step';
import State from '../Domain/State';

function createStepsArr(
  arr: number[],
  ready: number[],
  changing: number[]
): Step[] {
  const res: Step[] = [];
  for (let i = 0; i < arr.length; i++) {
    let state = State.Idle;
    if (changing.indexOf(i) != -1) state = State.Changing;
    if (ready.indexOf(i) != -1) state = State.InPlace;

    res.push(new Step(arr[i], state));
  }
  console.log(res);
  return res;
}

export default createStepsArr;
