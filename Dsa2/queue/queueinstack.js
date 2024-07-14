class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    isEmpty() {
        return this.size === 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.first = this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const temp = this.first;
        this.first = this.first.next;
        this.size--;
        if (this.isEmpty()) {
            this.last = null;
        }
        return temp.value;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let curr = this.first;
            let val = '';
            while (curr) {
                val += `${curr.value} `;
                curr = curr.next;
            }
            console.log(val);
        }
    }
}

class Stack {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(value) {
        this.queue1.enqueue(value);
    }

    pop() {
        if (this.queue1.isEmpty()) {
            return null;
        }
        while (this.queue1.size > 1) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
        const poppedValue = this.queue1.dequeue();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return poppedValue;
    }

    print() {
        this.queue1.print();
    }
}

// Example usage
let stack = new Stack();
stack.push(4);
stack.print();
stack.push(41);
stack.print();
console.log('Popped:', stack.pop());
stack.print();
console.log('Popped:', stack.pop());
stack.print();
