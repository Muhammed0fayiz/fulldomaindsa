class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doublelin {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isempty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);
        if (this.isempty()) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isempty()) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    print() {
        let curr = this.head;
        let listed = '';
        while (curr) {
            listed += `${curr.value}=>`;
            curr = curr.next;
        }
        console.log(listed);
    }

    firstremove() {
        if (this.isempty()) {
            return -1;
        }
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
    }

    lastremove() {
        if (this.isempty()) {
            return -1;
        }
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    elemremove(value) {
        if (this.isempty()) {
            return -1;
        }
        if (this.head === this.tail && this.head.value === value) {
            this.head = this.tail = null;
        } else {
            let curr = this.head;
            while (curr && curr.value !== value) {
                curr = curr.next;
            }
            if (curr && curr.value === value) {
                if (curr === this.head) {
                    this.head = curr.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } else if (curr === this.tail) {
                    this.tail = curr.prev;
                    this.tail.next = null;
                } else {
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                }
                this.size--;
            }
        }
    }
}

// Testing the implementation
const li = new doublelin();

li.append(1);
li.print();
li.firstremove();
console.log('el');
li.print();
console.log('el');
li.append(2);
li.append(3);
li.append(4);
li.append(5);
li.print();
li.prepend(0);
li.print();
li.prepend(10);
li.print();

console.log(li.tail.prev.value);
console.log(li.head.prev);
li.firstremove();
li.print();
li.lastremove();
li.print();
li.elemremove(25);
console.log('elem');
li.print();
