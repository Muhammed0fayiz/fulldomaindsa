

function feb(n){
    let val=[0,1]
    for (let i=2;i<n;i++){
        val[i]=val[i-1]+val[i-2]
    }
    return val
}

console.log( feb(2));

console.log( feb(3));

console.log( feb(4));