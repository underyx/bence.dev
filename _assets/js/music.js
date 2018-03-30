$(function() {
  $('.music .content #launch').click(function() {
    $('body').addClass('launched');
    setTimeout(function () { $('.site').hide(); }, 1000);
    setTimeout(function () { document.querySelector('#swipe animate').beginElement(); }, 1600);
  })
});
