class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  appent(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  print() {
    let curr = this.head;
    let list = "";
    while (curr) {
      list = list + `${curr.value}`;
      curr = curr.next;
    }
    console.log(list);
  }
  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  firstdel() {
    if (this.isEmpty() || this.size === 1) {
      return null;
    } else {
      this.head = this.head.next;
    }
  }
  lastdel() {
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }

  removeindex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      let remove = curr.next;
      curr.next = remove.next;
    }
    this.size--;
  }
  removevalue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
    }
    let curr = this.head;
    while (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
      this.size--;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  ispal() {
    if (this.isEmpty()) {
      return false;
    }
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;}
      for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
          return false;
        }
      }
    
    return true;
  }

  arrinsert(arr){
    for(let i=0;i<arr.length;i++){
        this.appent(arr[i])
    }
  }
}

const ll = new LinkedList();
ll.appent(3);
ll.print();
ll.appent(4);
ll.print();
ll.prepend(5);
ll.print();
ll.appent(6);
ll.print();
ll.appent(1);
ll.print();



ll.prepend(2);
ll.print();
ll.prepend(5);
ll.print();
ll.reverse();
console.log("reverse");
ll.print();
ll.firstdel();
console.log("first del");
ll.print();
ll.lastdel();
console.log("last del");
ll.print();
console.log("remove elem");
ll.removeindex(0);
ll.print();

console.log("value");
ll.removevalue(2);
ll.print();
ll.removeindex(2);
ll.print();
console.log(ll.search(2));
ll.appent(4);
console.log(ll.ispal());
ll.arrinsert([2,3,4,5,6,7,8])
ll.print()



