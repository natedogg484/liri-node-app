// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Create a movie name variable that slices the process array
var movieName = process.argv.slice(3).join(" ");

// Then ran a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryUrl).then(
  function (response) {
    console.log("Title: " + response.data.Title, "Release Year: " + response.data.Year, "Rotten Tomato's rating: " + response.data.Ratings[1].Value, "IMDB rating: " + response.data.imdbRating, "Country: " + response.data.Country, "Language: " + response.data.Language, "Plot: " + response.data.Plot, "Actors: " + response.data.Actors)
  }
);
