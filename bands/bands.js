// var axios = require("axios");

var bandsintown = require('bandsintown')("f6b2aaced5552012b241135ba684e8c7");
//change 2 to 3 in actual project
bandsintown
  .getArtistEventList(process.argv.slice(2).join(" "))
  .then(function(events) {
    console.log(JSON.stringify(events))
  });


// var artist = ""
// var nodeArgs = process.argv

// for (var i = 3; i < nodeArgs.length; i++) {
//     if (i > 3 && i < nodeArgs.length) {
//         artist = artist + "+" + nodeArgs[i];
//     }
//     else {
//         artist += nodeArgs[i];

//     }
// }

// var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"