
// Her hansisa number elementleri olan arayin icindeki cut ededlerin
// kvadratlarinin cemini hesablayan bir function yazin.

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



// Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

let func=(num)=>{
if(num%3==0 && num%7==0){
console.log("Eded 3 ve 7ye bolunur")
}
else{
    console.log("Eded 3-e veyaxud 7ye bolunmur")
}

}
func(21)