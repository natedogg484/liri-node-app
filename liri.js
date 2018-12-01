

if (process.argv[2] === "concert-this") {
    var bandsintown = require('bandsintown')("f6b2aaced5552012b241135ba684e8c7");

    bandsintown
        .getArtistEventList(process.argv.slice(3).join(" "))
        .then(function (events) {
            console.log(JSON.stringify(events))
        });

}

if (process.argv[2] === "spotify-this-song") {
    var Spotify = require('node-spotify-api')

    var spotify = new Spotify({
        id: "47e0602d22f843f689baaba5feebdbec",
        secret: "219552d4f2c04323968226ceceac3584"
    });


    spotify
        .search({ type: 'track', query: process.argv.slice(3).join(" ") })
        .then(function (response) {
            let sData = response.tracks.items[0]
            console.log("Artist: " + sData.artists[0].name)
            console.log("Album: " +sData.album.name)
            console.log("Song: " +sData.name)
            console.log("Spotify URL: " +sData.artists[0].href)
        })
        .catch(function (err) {
            console.log(err);
        });

}

if (process.argv[2] === "movie-this") {
    // Include the axios npm package 
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
}

if (process.argv[2] === "do-what-it-says") {
    var Spotify = require('node-spotify-api')

    var spotify = new Spotify({
        id: "47e0602d22f843f689baaba5feebdbec",
        secret: "219552d4f2c04323968226ceceac3584"
    });


    spotify
        .search({ type: 'track', query: "I want it that way" })
        .then(function (response) {
            // console.log(JSON.stringify(response))
            console.log(JSON.stringify(response))


        })
        .catch(function (err) {
            console.log(err);
        });
}