function lastIndexOf(targetArray, value) {
  if (targetArray.length === 0) {
    return -1;
  }
  for ( let i = targetArray.length - 1; i >= 0; i -- ) {
    //works numbner in the array
    if ( targetArray[i] === value ) {
      return i;
    } 
  }
  return -1;
}
console.log(lastIndexOf([ 5, 5, 5 ], 5));

