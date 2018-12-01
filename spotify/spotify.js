


var Spotify = require('node-spotify-api')

var spotify = new Spotify({
    id: "47e0602d22f843f689baaba5feebdbec",
    secret: "219552d4f2c04323968226ceceac3584"
});

// change 2 to 3 for the actual process
spotify
    .search({ type: 'track', query: process.argv.slice(2).join(" ") })
    .then(function (response) {
        // console.log(JSON.stringify(response))
        console.log(JSON.stringify(response.tracks))


    })
    .catch(function (err) {
        console.log(err);
    });
