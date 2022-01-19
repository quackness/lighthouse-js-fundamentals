

function merge (array1, array2) {
  let combined = array1.concat(array2)
  return combined.sort((a, b) => a - b);
};


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));


// function merge (array1, array2) {
//   let combined = []; 
//   for ( i = 0; i < array1.length; i++) {
//     combined.push(array1[i]);
//   }
//   for ( i = 0; i < array2.length; i++) {
//     combined.push(array2[i]);
//   }
//   return combined.sort((a, b) => a - b);
// };

