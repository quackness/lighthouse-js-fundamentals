// function loopyLighthouse(range, multiples, words) {
//   for ( var x = 100; x <= 200; x++) {
//     if ((x % 3 === 0) && (x % 4 === 0)) {
//       console.log("LoopyLighthouse");
//     }
//     else if (x % 3 === 0) {
//       console.log("Loopy");
//     }
//     else if (x % 4 === 0) {
//       console.log("Lighthouse");
//     }
//     else {
//       console.log(x);
//     }
//   }
// }

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


// Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 
//3 parameters.

//     range should be an array of 2 numbers representing the start and end values for the loop.
//     multiples should be an array of 2 numbers representing the multiples you want to replace with words.
//     words should be an array of 2 strings representing the words that will replace the multiples.

// For example, say we called the function with the following arguments.

// The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing 
//multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".


function loopyLighthouse(range, multiples, words) {
  for ( var x = range[0]; x <= range[1]; x++) {
    if ((x % multiples[0] === 0) && (x % multiples[1] === 0)) {
      console.log(words.join(""));
    }
    else if (x % multiples[0] === 0) {
      console.log(words[0]);
    }
    else if (x % multiples[1] === 0) {
      console.log(words[1]);
    }
    else {
      console.log(x);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);