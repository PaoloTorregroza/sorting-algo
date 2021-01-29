
function InsertionSort(list: number[] ) {

    const n = list.length;

    for (let i = 0; i < n; i++) {
        
        let pos: number = i;
        const valor: number = list[i]
        while (pos > 1 && valor < list[pos - 1]) {

            //cambio de lugares
            list[pos] = list[pos - 1]
            pos = pos - 1

        }

        list[pos] = valor
        
    }

}

export default InsertionSort

