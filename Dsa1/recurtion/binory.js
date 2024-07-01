function binory(arr,target){
    return search(arr,target,0,arr.length)
}

function search(arr,target,start,end){
    if(start>end){
        return false
    }
    let mid=Math.floor((start+end)/2)
    if(arr[mid]===target){
        return mid
    }
    if(arr[mid]<target){
        return search(arr,target,mid+1,end)
    }else{
        return search(arr,target,start,mid-1)
    }
}


console.log(binory([3,4,5,6,7,8,9],34));