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
    else if (key > this.key && this.right) {
      this.right.find(key);
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
  // bst.insert(3, 3);
  // bst.insert(1, 1);
  // bst.insert(4, 4);
  // bst.insert(6, 6);
  // bst.insert(9, 9);
  // bst.insert(2, 2);
  // bst.insert(5, 5);
  // bst.insert(7, 7);
  // // console.log(bst);
  // return(bst);
  EasyBst.insert('e');
  EasyBst.insert('a');
  EasyBst.insert('s');
  EasyBst.insert('y');
  EasyBst.insert('q');
  EasyBst.insert('u');
  EasyBst.insert('e');
  EasyBst.insert('s');
  EasyBst.insert('t');
  EasyBst.insert('i');
  EasyBst.insert('o');
  EasyBst.insert('n');
  // console.log(EasyBst);
  return (EasyBst);
}
// console.log(main());

function tree(t) {
  if (!t) {
    return 0;
  }
  // console.log(t.value);
  return tree(t.left) + t.value + tree(t.right);
}


//Height
function height(tree) {
  if (!tree) {
    return 0;
  }
  let leftHeight = height(tree.left);
  let rightHeight = height(tree.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

// console.log(tree(main()));

//is it a BST
function isBST(tree) {

  if (!tree) {
    return false;
  }
  else if (tree.left > tree.key || tree.right < tree.key) {
    return false;
  } else {
    return true;
  }

}
// console.log(isBST(main()));
let state = {
  n: 3,
  result: null
};
function thirdLargest(tree, state) {

  if (tree.right) {
    thirdLargest(tree.right, state);
    if (state.result) return;
  }
  state.n--;
  if (!state.n) {
    state.result = tree.key;
    return state.result;
  }
  if (tree.left) {
    thirdLargest(tree.left, state);
  }

}
thirdLargest(main(), state);
// console.log(state.result);
let counter = {
  number: 0
};
function balaced(tree, counter) {

  if (tree.right) {
    counter.number++;
    balaced(tree.right, counter);
  }
  if (tree.left) {
    counter.number--;
    balaced(tree.left, counter);
  }
  if (counter.number < 0 || counter.number > 0) {
    return false;
  } else {
    return true;
  }
}
// console.log(balaced(main(),counter));


function bstMatchTest(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
//This is time complexity o(n)
console.log(bstMatchTest([1, 2, 3, 4, 5], [5, 3, 4, 2, 1]));
