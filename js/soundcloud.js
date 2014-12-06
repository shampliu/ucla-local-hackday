SC.initialize({
  client_id: '4fe4e9b1f91147d23bcfe87a889ec45e',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'foo' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });

  $('a.connect').click(function(e) {
    e.preventDefault();
    SC.connect(function(){
        SC.get('/me',function(me) {
            $('#username').html(me.username);
        });
    });
    
  });
});
