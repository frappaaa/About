require("node-spotify-api")
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: 'ce4929b9eb664890999fa2117a76ae35',
  secret: 'f6a27a6dceb5478eaa893ba846dec55d'
});
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data['tracks']['items'][0]['name'])
});