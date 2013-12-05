$(document).ready(function() {
  $(".profiles .content a").bind("click", function() {
    _gaq.push(['_trackEvent', 'Profiles', 'Click', $(this).text()]);
  });
});
