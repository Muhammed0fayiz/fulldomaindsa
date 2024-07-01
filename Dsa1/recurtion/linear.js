function linearrec(arr,target,index=0){
    if(index>=arr.length){
        return -1
    }
   if(arr[index]===target){
    return index
   }
   return linearrec(arr,target,index+1)
}

console.log(linearrec([1,2,3,4,5,6,7,8,6,5,4],42))