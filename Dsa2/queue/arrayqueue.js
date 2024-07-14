class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(value) {
		this.items.push(value);
	}

	dequeue() {
		return this.items.shift(); // O(n) --- Is a problem
	}

	peek() {
		return this.items[0];
	}

	print() {
		if(!this.isEmpty()) {
			console.log(this.items.toString());
		} else {
			console.log("Queue is empty")
		}
	}

	isEmpty() {
		return this.items.length === 0;
	}
}

let que = new Queue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);

que.dequeue();
que.print();