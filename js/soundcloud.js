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
});

$('button').click(function(){
	event.preventDefault();
	$genre = $('#search-term').val();
	SC.get('/tracks', { genres: $genre}, function(tracks) {
	 console.log(tracks);

  	$('#results').html(''); // clears the list before refreshing
      $(tracks).each(function(index, track) {
        if (track.playback_count > 1000000) {
          // SC.oEmbed("https://soundcloud.com/markverse/miami-feat-hakan-preview-mark-verse", { auto_play: false }, function(oEmbed) {
          //   console.log('oEmbed response: ' + oEmbed);
          // });
          $('#results').append($('<li></li>').html(track.title + ' - ' + track.playback_count + ' - ' + track.permalink_url));
  //         $('#results').append($('<li></li>').html(<script>SC.oEmbed(track.permalink_url { auto_play: false }, function(oEmbed) {
  // console.log('oEmbed response: ' + oEmbed</script>);
  //         });
      

          


        }


        


      });

  })
});
