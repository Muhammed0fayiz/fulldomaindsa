class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
}

class QueueUsingStacks {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    print() {
        if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
            console.log('Queue is empty');
            return;
        }

        let tempStack = new Stack();
        
        // Transfer elements from stack2 to tempStack
        while (!this.stack2.isEmpty()) {
            tempStack.push(this.stack2.pop());
        }
        
        // Print elements from tempStack (oldest to newest in stack2)
        let result = '';
        while (!tempStack.isEmpty()) {
            let value = tempStack.pop();
            result += `${value} `;
            this.stack2.push(value);  // Push back to stack2
        }
        
        // Print elements from stack1 (newest to oldest in stack1)
        for (let i = this.stack1.items.length - 1; i >= 0; i--) {
            result += `${this.stack1.items[i]} `;
        }
        
        console.log(result.trim());
    }
}

// Example usage
const queue = new QueueUsingStacks();
queue.print();
queue.enqueue(1);
queue.print();
queue.enqueue(2);
queue.print();
queue.enqueue(3);
queue.print();
console.log('Dequeued:', queue.dequeue());
queue.print();
console.log('Dequeued:', queue.dequeue());
queue.print();
