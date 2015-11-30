$(function() {
  $(".profiles .content a").click(function() {
    _gaq.push(['_trackEvent', 'Profiles', 'Click', $(this).text()]);
  });
});
