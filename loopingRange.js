function range(start, end, step) {
  
  if (( start === undefined ) || ( end === undefined ) || ( step === undefined )) {
    return [];
  }
  else if ( start > end ) {
    return [];
  }
  else if ( step <= 0 ) {
    return [];
  } else {
    const calculatedArray = [];
    for ( let i = start; i <= end; i += step ) {
      calculatedArray.push(i);
    }
    return calculatedArray;
  }
}
console.log(range(0, 8, 2));

