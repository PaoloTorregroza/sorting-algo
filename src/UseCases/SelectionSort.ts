function selectionSort(list: number[] ) {

    const n = list.length;

    for (let i = 0; i < n; i++) {
        
        let menor = i;
        for (let j =  i + 1; j < n; j++) {
            if(list[j] < list[menor]){

                menor = j;
            } 
            
        }

        if (list[i] > list[menor]) {
            const temp: number = list[i];
            list[i] = list[menor];
            list[menor] = temp;
            
        }
        
    }

}

export default selectionSort