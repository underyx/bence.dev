document.querySelector('.music .content #launch').addEventListener('click', function() {
  document.getElementsByTagName('body')[0].classList.add('launched');
  setTimeout(function () { document.getElementsByClassName('site')[0].style.display = 'none'; }, 1000);
  setTimeout(function () {
    document.querySelector('#swipe animate').beginElement();
    document.getElementById('player-embed').src = 'https://open.spotify.com/embed/user/underyx/playlist/4AL4GXMflWxZ42UJLDQYJf';
  }, 1600);
});
