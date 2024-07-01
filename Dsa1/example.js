class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null
    }

}

class doublelin{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }
    isempty() {
        return this.size === 0;
    }
    append(value){
        const node=new Node(value)
        if(this.isempty()){
            this.head=this.tail=node
        }
        else{
            node.prev=this.tail;
            this.tail.next=node;
            this.tail=node


        }
        this.size++

    }

    prepend(value){
        const node=new Node(value)
        if(this.isempty()){
            this.head=this.tail=node
        }else{
            node.next=this.head;
           this.head.prev=node;
           this.head=node
        }
        this.size++
    }
    print(){
        let curr=this.head;
       let listed=''
        while(curr){
            listed=listed+`${curr.value}=>`
            curr=curr.next;
        }
        console.log(listed);
    }
    firstremove(){
        if(this.isempty()){
            return -1
        }
        if(this.head===this.tail){
            this.head=this.tail=null
        }
        else{
            this.head=this.head.next;
        }this.size--
    }
    lastremove(){
        if(this.isempty()){
            return -1
        }
        if(this.head===this.tail){
            this.head=this.tail=null
        }else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
        this.size--
    }
   elemremove(value){ 
    if(this.isempty()){
        return -1
    }
    if(this.head===this.tail&&this.head.value===value){
        this.head=this.tail=null
    }else{
        let curr=this.head;
        while(curr&&curr.value!==value){
            curr=curr.next
        }
        if(curr.value===value){
            if(curr.next){
                    curr=curr.prev;
                    curr.next=null
            }else{
                let next=curr.next;
                
                curr.next=next.next

            }
        }

            
        {
            
        }
    }

   }
}

const li=new doublelin()

li.append(1)
li.print()
li.firstremove()
console.log('el');
li.print()
console.log('el');
li.append(2)
li.append(3)
li.append(4)
li.append(5)
li.print()
li.prepend(0)
li.print()
li.prepend(10)
li.print()

console.log(li.tail.prev.value)
console.log(li.head.prev)
li.firstremove()
li.print()
li.lastremove()
li.print()
li.elemremove(2)
console.log('elem');
li.print()