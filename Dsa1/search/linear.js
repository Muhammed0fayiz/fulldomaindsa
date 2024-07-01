function liner(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            return i
        }
      
    }
    return -1
}

console.log(liner([3,4,5,6,7,3],2));