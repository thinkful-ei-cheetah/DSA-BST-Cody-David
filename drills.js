'use strict';

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key,
    this.value = value,
    this.parent = parent,
    this.left = null,
    this.right = null;
  }


  insert(key, value) {

    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {

      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      this.left.find(key);
    }
    else if (key > this.key && this.left) {
      this.fight.find(key);
    }
    else {
      throw new Error('key error');
    }
  }
  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.left);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.left) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this === this.parent.left) {
      this.parent.left = node;
    }
    else if (this === this.parent.right) {
      this.parent.right = node;
    }

    if (node) {
      node.parent = this.parent;
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

}

function main() {
  let bst = new BinarySearchTree();
  let EasyBst = new BinarySearchTree();
  bst.insert(3, 3);
  bst.insert(1, 1);
  bst.insert(4, 4);
  bst.insert(6, 6);
  bst.insert(9, 9);
  bst.insert(2, 2);
  bst.insert(5, 5);
  bst.insert(7, 7);
  console.log(bst);
  return(bst);
  // EasyBst.insert('e');
  // EasyBst.insert('a');
  // EasyBst.insert('s');
  // EasyBst.insert('y');
  // EasyBst.insert('q');
  // EasyBst.insert('u');
  // EasyBst.insert('e');
  // EasyBst.insert('s');
  // EasyBst.insert('t');
  // EasyBst.insert('i');
  // EasyBst.insert('o');
  // EasyBst.insert('n');
  // console.log(EasyBst);
  // return(EasyBst);
}
// console.log(main());

function tree(t) {
  if (!t) {
    return 0;
  }
  // console.log(t.value);
  return tree(t.left) + t.value + tree(t.right);
}



function height(tree){
  if(!tree){
    return 0;
  }
  let leftHeight = height(tree.left);
  let rightHeight = height(tree.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

console.log(tree(main()));