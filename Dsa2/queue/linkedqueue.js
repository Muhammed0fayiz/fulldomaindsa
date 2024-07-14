class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class queue{
    constructor(){
        this.first=null
        this.last=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }

    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.first=this.last=node;
        }else{
           
            this.last.next=node;
            this.last=node
        }this.size++
     
    }
    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let curr = this.first;
            let val = '';
            while (curr) {
                val = val + `${curr.value} `;
                curr = curr.next;
            }
            console.log(val);
        }
    }
    dqueue(){
        if(this.isEmpty()){
            return null
        }if(this.first===this.last){
            this.last=null
        }else{
            this.first=this.first.next
        }this.size--
    }



}
let qu=new queue()
qu.enqueue(4)
qu.print()
qu.enqueue(41)
qu.print()
qu.dqueue()
qu.print()
qu.dqueue()
qu.print()