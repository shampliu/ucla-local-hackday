SC.initialize({
  client_id: '4fe4e9b1f91147d23bcfe87a889ec45e',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
  $('a.connect').click(function(e) {
    e.preventDefault();
    SC.connect(function(){
        SC.get('/me',function(me) {
            $('#username').html(me.username);
        });
    });
    
  });
  $('#results').append(
    var track_url = 'http://soundcloud.com/forss/flickermood';
    SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      console.log('oEmbed response: ' + oEmbed);
    });

});

// $('button').click(function(){
// 	event.preventDefault();
// 	$genre = $('#search-term').val();
// 	SC.get('/tracks', { genres: $genre }, function(tracks) {
// 	console.log(tracks);

// 	$('#results').html('');
//     $(tracks).each(function(index, track) {
//       $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
//     });


// })
// });

