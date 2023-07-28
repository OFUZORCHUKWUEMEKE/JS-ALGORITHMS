function simpleArraySum(arr){
    return arr.reduce((arr,car)=>arr+car,0)
}

simpleArraySum([1,2,3,4,10,11])