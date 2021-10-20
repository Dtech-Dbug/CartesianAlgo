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

 // find the set of ordered pairs by concat. each items from first set to each items from the second
  for (i = 0; i < setA.length; i++) {
    for (j = 0; j < setB.length; j++) {
      orderedPairs.push([setA[i], setB[j]]);
    }
  }
  
  // loop thru the set of ordered pairs and do something

  orderedPairs.forEach((pair, index) => {
 
   // check for relations that abide by the A[i] < B[j] relation
    pair.reduce((prev, next) => {
      if (prev < next) {
        //store the relations in a set
        relatedList.push(pair);
        console.log(relatedList);
      } else {
        
        //store the products that are not related seperately
        unRelatedList.push(pair);
        console.log("unrelated list-->", unRelatedList);
      }
    });
  });
};

cartesianProduct(A, B);
