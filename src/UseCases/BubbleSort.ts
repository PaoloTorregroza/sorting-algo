function bubbleSort(list: number[]) {

    const n = list.length;
    
     for (let i = 0; i < n; i++) {
         
        for (let j = 0; j < n - i - 1; j++) {     
 
          if(list[j] > list[j + 1]) {
            
           const temp = list[j]
           list[j] = list[j + 1]
           list[j + 1] = temp;   
 
         }   
 
        }   
        
    }
 
     return list
 }

export default bubbleSort