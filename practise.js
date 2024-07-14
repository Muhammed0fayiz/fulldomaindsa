class Hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i) - 96;
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    const bucket = this.table[index];
    const sameKeyItem = bucket.find((item) => item[0] === key);
    if (sameKeyItem) {
      sameKeyItem[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return -1;
  }
  display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i])
        }
    }
}

remove(key){
    const index=this.hash(key)
    const bucket=this.table[index]
    if(bucket){
        const sameKeyItem=bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            bucket.splice(bucket.indexOf(sameKeyItem),1)
            if(bucket.length===0){
                this.table[key]=null
            }
        }
    }
}

}


const ht=new Hashtable(50)

ht.set('ab',1)
ht.set('b',2)
ht.set('c',3)
ht.set('ba',4)
ht.display()
console.log(ht);
console.log(ht.get('ba'),"is");
ht.remove('ba')
console.log(ht.get('ba'),"is");