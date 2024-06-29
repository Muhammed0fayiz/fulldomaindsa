function feb(n){
    let fe=[0,1]
    for(let i=2;i<n;i++){
        fe[i]=fe[i-1]+fe[i-2]
    }
    return fe
}

console.log(feb(2));
console.log(feb(3));

console.log(feb(4));
console.log(feb(5));
console.log(feb(6));
console.log(feb(7));
console.log(feb(8));
console.log(feb(9));