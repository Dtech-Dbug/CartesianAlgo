type digits = number;
type set = number[];

let A: set = [0, 1, 2];
let B: set = [1, 2, 3];

// let array = [];

let cartesianProduct = (setA: set, setB: set) => {
  let i: digits;
  let j: digits;
  let orderedPairs = [];
  // let elements: set = [number, number];

  let relatedList: set = [];
  let unRelatedList: set = [];

  // console.log(typeof setA[1]);
  // console.log(JSON.stringify(setA));
  // console.log(setA);

  for (i = 0; i < setA.length; i++) {
    for (j = 0; j < setB.length; j++) {
      orderedPairs.push([setA[i], setB[j]]);
    }
  }
  orderedPairs.forEach((pair, index) => {
    // console.log(pair);

    pair.reduce((prev, next) => {
      if (prev < next) {
        relatedList.push(pair);
        console.log(relatedList);
      } else {
        unRelatedList.push(pair);
        console.log("unrelated list-->", unRelatedList);
      }
    });
  });
};

cartesianProduct(A, B);
