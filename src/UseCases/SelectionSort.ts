import createStepsArr from "@/Utils/createStepsArr";

function selectionSort(list: number[]): Step[][] {
    const res = [];

    const n = list.length;
    const readyValues: number[] = [];
    let changingValues: number[] = [];

    for (let i = 0; i < n; i++) {
        
        let menor = i;
        for (let j =  i + 1; j < n; j++) {
            if(list[j] < list[menor]){

                menor = j;
            } 
            
        }

        if (list[i] > list[menor]) {
            const temp: number = list[i];
            changingValues = [temp, menor]
            res.push(createStepsArr(list, readyValues, changingValues))
            list[i] = list[menor];
            list[menor] = temp;
            
        }

        readyValues.push(n - 1 - i);
        res.push(createStepsArr(list, readyValues, changingValues))
        
    }

    return res;

}

export default selectionSort