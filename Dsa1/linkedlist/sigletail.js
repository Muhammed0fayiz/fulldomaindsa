class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isempty() {
        return this.size === 0;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isempty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isempty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    firstdel() {
        if (this.isempty()) {
            return null;
        } else {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            this.size--;
        }
    }

    lastdel() {
        if (this.isempty()) {
            return null;
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;
            while (curr.next !== this.tail) {
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr;
        }
        this.size--;
    }

    print() {
        let curr = this.head;
        let arr = '';
        while (curr) {
            arr += `${curr.value} -> `;
            curr = curr.next;
        }
        console.log(arr);
    }

    removeindex(elem) {
        if (elem < 1 || elem > this.size) {
            return -1;
        }
        if (elem === 1) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
        } else {
            let curr = this.head;
            for (let i = 1; i < elem - 1; i++) {
                curr = curr.next;
            }
            let remove = curr.next;
            curr.next = remove.next;
            if (curr.next === null) {
                this.tail = curr;
            }
        }
        this.size--;
    }

    reverse() {
        let curr = this.head;
        let prev = null;
        this.tail = curr; // the current head will become the tail after reversing
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.print();
ll.removeindex(2); // Remove the second element (index 2)
ll.print();

ll.reverse();
ll.print();
