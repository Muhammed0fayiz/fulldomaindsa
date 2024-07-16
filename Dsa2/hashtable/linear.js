// Divition Method Using linear probing
class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        let index = this.hash(key);
        while (this.table[index] !== undefined && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
        }
        this.table[index] = [key, value]; // Store only the last value for the key
    }
    

    get(key){
        const index=this.hash(key)
        while(this.table[index]!==undefined){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index=(index+1)%this.size
        }
        return -1
    }

    remove(key) {
        let index = this.hash(key); // Hash the key to get the initial index
        let startIndex = index; // Store the initial index for later comparison
    
        while (this.table[index] !== undefined) { // Loop until an empty slot is encountered
            if (this.table[index][0] === key) { // If the current slot matches the key
                this.table[index] = undefined; // Remove the entry by setting it to undefined
                return true; // Return true indicating successful removal
            }
            index = (index + 1) % this.size; // Move to the next slot using linear probing
            if (index === startIndex) { // If we have probed the entire table and reached the initial index
                break; // Exit the loop to prevent an infinite loop
            }
        }
        return false; // Return false indicating the key was not found in the table
    }
    
    display(){
        this.table.forEach((item,index)=>{
            console.log(index,item);
        })
    }
}

const table = new hashTable(100);

table.set("ab","Akbar")
table.set("ba",20)
table.set("ab","Psnm")
console.log(table.get("a"),);

table.display()