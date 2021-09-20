type digits = number;
type set = [digits, digits, digits];

let A: set = [0, 1, 2];
let B: set = [1, 2, 3];

// let array = [];

let cartesianProduct = (setA: set, setB: set) => {
  let i: digits;
  let j: digits;
  let list = [];

  for (i = 0; i < setA.length; i++) {
    for (j = 0; j < setB.length; j++) {
      list.push([setA[i], setB[j]]);
    }
  }
  console.log(list);
};

console.log(cartesianProduct(A, B));
