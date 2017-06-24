
//Essayer de viser le bouton player
$('.slick-slide img').click(function(e){
  $('iframe#player').css("display", "block");
  $('.slick-slide img').remove();

});

var player;
function onVideoReady() {
  player = new YT.Player('player', {
    height: '800',
    width: '1280',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
}

});
}


function stopVideo() {
  player.stopVideo();
}
function playVideo() {
  player.playVideo();
}
