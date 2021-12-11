const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  const bucket = [];
  for (station of stations) {
    if (station[1] > 20 ) {
      if (station[2] === "school" || station[2] === "community centre")
      bucket.push(station);
    }
    
  }
  return bucket;
}

console.log(chooseStations(stations));




// for loop to go through the stations
//if statements 
//console.log(chooseStations(stations))