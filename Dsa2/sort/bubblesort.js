function bubblesort(arr){
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
return arr
}


console.log(bubblesort([3,2,4,5,6,7,8,9]));







