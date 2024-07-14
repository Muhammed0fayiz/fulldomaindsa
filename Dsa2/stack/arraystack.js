class Stack {
    constructor() {
        this.items = []; // Renamed to follow camelCase convention
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        let lastItem = this.items.pop();
        return lastItem;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() { // Corrected typo here
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1]; // Corrected typo here
    }

    print() {
        if (this.isEmpty()) {
            console.log("No items");
        } else {
            console.log(this.items.toString());
        }
    }
}

const st = new Stack();
st.push(3);
st.push(45);
st.push(3);
st.push(435);
st.push(32);
st.push(453);

st.pop();

st.print();
console.log(st.peek()); // Corrected typo here
