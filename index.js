var A = [0, 1, 2];
var B = [1, 2, 3];
// let array = [];
var cartesianProduct = function (setA, setB) {
    var i;
    var j;
    var list = [];
    for (i = 0; i < setA.length; i++) {
        for (j = 0; j < setB.length; j++) {
            list.push([setA[i], setB[j]]);
        }
    }
    console.log(list);
};
console.log(cartesianProduct(A, B));
