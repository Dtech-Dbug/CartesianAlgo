// ? configure the chart package
var board = JXG.JSXGraph.initBoard("box", {
  boundingbox: [-2, 4, 6, -4],
  axis: true,
  grid: true,
});

// board.create("point", [1, 3], { name: "A", strokecolor: "red" });

var A = [0, 1, 2];
var B = [1, 2, 3];
// let array = [];
var cartesianProduct = function (setA, setB) {
  var i;
  var j;
  var orderedPairs = [];
  // let elements: set = [number, number];
  var relatedList = [];
  var unRelatedList = [];

  for (i = 0; i < setA.length; i++) {
    for (j = 0; j < setB.length; j++) {
      orderedPairs.push([setA[i], setB[j]]);
    }
  }
  orderedPairs.forEach(function (pair, index) {
    //create points in the chart
    board.create("point", pair, { name: `(${pair})`, strokecolor: "red" });

    //get the related items
    pair.reduce(function (prev, next) {
      if (prev < next) {
        relatedList.push(pair);
        relatedList.map((linkedItem) => {
          console.log("lnked item->", linkedItem);
          board.create("point", linkedItem, {
            name: "",
            strokecolor: "green",
          });
        });
      } else {
        unRelatedList.push(pair);
        console.log("unrelated list-->", unRelatedList);
        unRelatedList.map((notLinkedItem) => {
          //   board.create("point", linkedItem, {
          //     name: "R",
          //     strokecolor: "yellow",
          //   });
        });
      }
    });
  });
};
cartesianProduct(A, B);
