switchToPlaylist = function (playlistId) {
  const playlist = playlists[playlistId];
  document.getElementById('player-embed').src = `https://open.spotify.com/embed/user/underyx/playlist/${playlist.spotify_id}`;
  document.getElementById('background-over').src = `${playlist.image_url}`;
  setTimeout(function () {
    document.querySelector('#swipe rect').classList.replace('left', 'middle');
  }, 2000);
}

document.querySelector('.music .content #launch').addEventListener('click', function() {
  document.getElementsByTagName('body')[0].classList.add('launched');
  setTimeout(function () {
    document.getElementsByClassName('site')[0].style.display = 'none';
    document.getElementsByClassName('player')[0].style.display = 'block';
  }, 1000);
  switchToPlaylist('2018-03');
});
