
function InsertionSort(list: number[] ) {

    let n = list.length;

    for (let i = 0; i < n; i++) {
        
        let pos: number = i;
        let valor: number = list[i]
        while (pos > 1 && valor < list[pos - 1]) {

            //cambio de lugares
            list[pos] = list[pos - 1]
            pos = pos - 1

        }

        list[pos] = valor
        
    }

}

export default InsertionSort

