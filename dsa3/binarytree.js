class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value < newNode.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        return this.insertNode(root.right, newNode);
      }
    } else {
      if (root.left === null) {
        root.left = newNode;
      } else {
        return this.insertNode(root.left, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value < value) {
        return this.search(root.right, value);
      } else {
        return this.search(root.left, value);
      }
    }
  }

  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }

  levelorder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  secmax(root) {
    if (!root || (!root.left && !root.right)) {
      return null;
    }

    let parent = null;
    let current = root;

    while (current.right) {
      parent = current;
      current = current.right;
    }

    if (current.left) {
      return this.max(current.left);
    }

    return parent.value;
  }

  delete(root, value) {
    if (!root) {
      return root;
    }

    if (value < root.value) {
      root.left = this.delete(root.left, value);
    } else if (value > root.value) {
      root.right = this.delete(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        let temp = this.minNode(root.right);
        root.value = temp.value;
        root.right = this.delete(root.right, temp.value);
      }
    }
    return root;
  }

  minNode(root) {
    let current = root;
    while (current && current.left !== null) {
      current = current.left;
    }
    return current;
  }
}

const bt = new Bst();
console.log(bt.isEmpty());
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.insert(7);

console.log(bt.isEmpty());

console.log(bt.search(bt.root, 12));
bt.preorder(bt.root);

console.log("In order:");
bt.inorder(bt.root);

console.log("Post order:");
bt.postorder(bt.root);

console.log("Level order:");
bt.levelorder();

console.log("Minimum value:", bt.min(bt.root));
console.log("Maximum value:", bt.max(bt.root));
console.log("Second maximum value:", bt.secmax(bt.root));
