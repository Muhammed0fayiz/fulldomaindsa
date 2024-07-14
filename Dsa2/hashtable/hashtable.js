class Hashtable{
    constructor(size){
        this.table=new Array(size);
        this.size=size 
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++)
        {
            total=total+key.charCodeAt(i)-96
        }return total%this.size
    }
    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = []; // Initialize bucket if it doesn't exist
        }
        const bucket = this.table[index];
        const sameKeyItem = bucket.find(item => item[0] === key);
        if (sameKeyItem) {
            sameKeyItem[1] = value;
        } else {
            bucket.push([key, value]);
        }
    }
    get(key) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
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
            const sameKeyItemIndex=bucket.find(item=>item[0]===key)
            if (sameKeyItemIndex){
                bucket.splice(bucket.indexOf(sameKeyItemIndex),1)
                if(bucket.length==0){
                    this.table[index]=null
                }
            }
        }
    }
    
}


const ht=new Hashtable(50)
ht.set('abc',13)

ht.set('bac',12)
ht.set('bca',12)
ht.set('cba',12)
 



ht.display()
ht.remove('bac')

ht.display()