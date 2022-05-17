



function squareTotal(arr){


    let result=0;
    
    for (let i = 0; i < arr.length; i++) {
       
        if(arr[i]%2==0){

          result+= arr[i] * arr[i]
           
        }
        
    }
   
    return result
}

console.log(squareTotal([4,3,7,1,4]));
