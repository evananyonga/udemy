var movieObjects = [
{
  title : "Matrix",
  rating : 5,
  hasWatched : true
},
{
  title : "Frozen",
  rating : 4.5,
  hasWatched : true
},
{
  title : "Mad Max Fury Road",
  rating : 5,
  hasWatched : true
},
{
  title : "In Bruges",
  rating : 5,
  hasWatched : false
},
{
  title : "Les Miserables",
  rating : 3.5,
  hasWatched : false
}
];

// movieObjects.forEach((obj) => {
//   if (obj.hasWatched === false) {
//     console.log("You have not seen " + "\"" + obj.title + "\"" + ' - ' + obj.rating + " stars");
//   } else {
//     console.log("You have watched " + "\"" + obj.title + "\"" + ' - ' + obj.rating + " stars");
//   }
// });

// cleaner ways

// movieObjects.forEach((movie) => {
//   var res = "You have ";
//   if (movie.hasWatched) {
//     res += "watched ";
//   } else {
//     res += "not seen ";
//   }
//   res += "\"" + movie.title + "\"" + ' - ' + movie.rating;
//   console.log(res);
// });

// or
function buildStr(movie) {
  var res = "You have ";
  if (movie.hasWatched) {
    res += "watched ";
  } else {
    res += "not seen ";
  }
  res += "\"" + movie.title + "\"" + ' - ' + movie.rating
  return res;
}

movieObjects.forEach((movie) => {
  console.log(buildStr(movie));
});
