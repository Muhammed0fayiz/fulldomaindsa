class Node{
    constructor(value){
       this.value=value
       this.next=null
    }
}

class qu{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0
    }

    isEmpty(){
        return this.size===0

    }
    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.first=this.last=node
        }else{
            this.last.next=node;
            this.last=node;
        }this.size++
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
        }}
}

const li=new qu()
li.print()
li.enlieue(1)
li.print()
li.enlieue(2)
li.print()
li.enlieue(3)
li.print()
li.enlieue(4)
li.print()