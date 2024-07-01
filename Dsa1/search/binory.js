function binorysearch(arr,target){

 let left=0;
 let right=arr.length-1
while(left<=right){
    let midindex=Math.floor((left+right)/2)
    if(target===arr[midindex]){
        return midindex
    }
    if(target<arr[midindex]){
        right=midindex-1
    }else{
        left=midindex+1
    }
}
return -1
}

binorysearch([1,2,3,4,5,6],4)
console.log(binorysearch([1,2,3,4,5,6],43));