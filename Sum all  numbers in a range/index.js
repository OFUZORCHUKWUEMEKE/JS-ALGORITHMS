function sumAll(arr){
//    let min,max;

   const min = arr[0]>arr[1]?arr[1]:arr[0]
   const max = arr[0]>arr[1]?arr[0]:arr[1]

//    refactor Code
   
//    if(arr[0]>arr[1]) {
//     max=arr[0];
//     min=arr[1]
//    }else{
//     max=arr[1];
//     min=arr[0];
//    }

   let sum = 0

//    for(let i = min ;i<=max;i++){
//       sum+=i
//    }

    // Refactor

   for(let i= Math.min(...arr);i <= Math.max(...arr);i++){
       sum+=i
   }

   return sum
}

console.log(sumAll([6,4]))