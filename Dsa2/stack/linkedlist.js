class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class StackLinkedlist{
    constructor(){
        this.first=null;
        this.last=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.first=this.last=node
        }else{
            let temp=this.first;
            this.first=node;
            this.first.next=temp
        }
        this.size++
    }
    pop(){
        if(!this.first){
         return null
        }if(this.first===this.last){
            return null
        }else{
            this.first=this.first.next
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('novalue')
        }else{
        let curr=this.first;
        let val=''
        while(curr){
            val=val+`${curr.value}`
            curr=curr.next
        }
        console.log(val);
    }}
    peak(){
        return this.first
    }
}

const sl=new StackLinkedlist()


sl.print()
sl.push(1)
sl.print()
sl.push(2)
sl.print()
sl.push(3)
sl.print()
sl.pop()
sl.print()
console.log(sl.peak(







    
));
