function mergesort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2)

    let left = mergesort(arr.slice(0, mid));
   
    let right = mergesort(arr.slice(mid));
    return merge(left,right)
}

function merge(left,right){
let sorted=[]
while(left.length&&right.length){
    if(left[0]<right[0]){ sorted.push(left.shift())}
    else{sorted.push(right.shift())}
}
return [...sorted,...left,...right]
}
let arr =  [9,2,3,1,4,5]
console.log(mergesort(arr))
console.log("original arr",arr)



let a=[1,2,3,4,56,6]
let b=a.slice(2)
console.log(b);