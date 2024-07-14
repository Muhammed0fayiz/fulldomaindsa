function selectionsort(arr){
    for(let i=0;i<arr.length-1;i++){

        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j])
                min=j
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}
let arr=[1,5,2,9,3,-4]
console.log(arr);
console.log(selectionsort(arr));
