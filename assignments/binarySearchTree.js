class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(val) {
      let newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while (true) {
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else current = current.left;
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  
    find(val) {
      if (!this.root) return false;
      if (val === this.root.value) {
        return this;
      }
      let current = this.root;
      while (true) {
        if (val < current.value) {
          if(!current.left) return 'Not found';
          if (val === current.left.value) {
            return current.left;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if(!current.right) return 'Not found';
          if (val === current.right.value) {
            return current.right;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(12);
  tree.insert(2);
  tree.insert(14);
  tree.insert(19);
  tree.insert(7);
  tree.insert(9);
  console.log(tree.root.right.right.right);
  let a = tree.find(19);
  console.log('aaaaa',a);
  //console.log(tree);