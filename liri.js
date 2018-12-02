

if (process.argv[2] === "concert-this") {
    var bandsintown = require('bandsintown')("f6b2aaced5552012b241135ba684e8c7");

    bandsintown
        .getArtistEventList(process.argv.slice(3).join(" "))
        .then(function (events) {
            console.log("Venue: "+events[0].venue.name)
            console.log("Location: "+events[0].formatted_location)
            console.log("Date: "+events[0].formatted_datetime)
            console.log("Tickets: "+events[0].ticket_url)
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
            console.log("Album: " + sData.album.name)
            console.log("Song: " + sData.name)
            console.log("Spotify URL: " + sData.artists[0].href)
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
            console.log("Title: " + response.data.Title)
            console.log( "Release Year: " + response.data.Year) 
            console.log("Rotten Tomato's rating: " + response.data.Ratings[1].Value) 
            console.log("IMDB rating: " + response.data.imdbRating) 
            console.log("Country: " + response.data.Country) 
            console.log("Language: " + response.data.Language)
            console.log("Plot: " + response.data.Plot) 
            console.log("Actors: " + response.data.Actors)
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
            let sData = response.tracks.items[0]
            console.log("Artist: " + sData.artists[0].name)
            console.log("Album: " + sData.album.name)
            console.log("Song: " + sData.name)
            console.log("Spotify URL: " + sData.artists[0].href)


        })
        .catch(function (err) {
            console.log(err);
        });
}