
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.first=node;
            this.last=node
        }else{
            let temp=this.first;
            this.first=node;
            this.first.next=temp
        }
     
        this.size++
    }
    pop() {
     if(!this.first){
        return null
     }if(this.first===this.last){
        return null
     }this.first=this.first.next;
     this.size--
    }
    print(){
        if(this.isEmpty()){
            console.log('novalue')
        }else{
            let curr=this.first;
            let val="";
            while(curr){
                val=val+`${curr.value} `
                curr=curr.next
            }
            console.log(val)

        }
    }
}
const stacks=new stack()
stacks.push(4)
stacks.push(44)
stacks.push(43)
stacks.push(448)
stacks.print()

