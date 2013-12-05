$(document).ready(function() {
  $(".music .content table button").bind("click", function() {
    var $(this).parent().prev().text()
    if (!$(this).hasClass("active")) {
      $(".grooveshark > param").attr("value", "playlistID=" + $(this).data("grooveshark") + "&p=1");
      $(".grooveshark").css("display", "block");

      var obj = $(".grooveshark");
      var orig = obj.html();
      obj.html(orig);

      $("button").removeClass("active");
      $(this).addClass("active");

      _gaq.push(['_trackEvent', 'Playlists', 'Play', ]);
    }
    _gaq.push(['_trackEvent', 'Playlists', 'Play', $(this).parent().prev().text(), 'Disabled']);
  });
});
