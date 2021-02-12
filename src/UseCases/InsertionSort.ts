import Step from '@/Domain/Step';
import createStepsArr from '../Utils/createStepsArr';

function InsertionSort(list: number[]): Step[][] {
    const res = [];

    const n = list.length;
    const readyValues: number[] = [];
    let changingValues: number[] = [];

    for (let i = 0; i < n; i++) {
        
        let pos: number = i;
        const valor: number = list[i]
        while (pos > 1 && valor < list[pos - 1]) {

            list[pos] = list[pos - 1]
            changingValues = [pos - 1, valor];
            res.push(createStepsArr(list, readyValues, changingValues))
            pos = pos - 1

        }

        list[pos] = valor

        readyValues.push(n - 1 - pos)
        res.push(createStepsArr(list, readyValues, changingValues))
        
    }

    return res;

}

export default InsertionSort

