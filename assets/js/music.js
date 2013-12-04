$( document ).ready(function() {
  $(".music .content table button").bind("click", function() {
    if (!$(this).hasClass("active")) {
      $(".grooveshark > param").attr("value", "playlistID=" + $(this).data("grooveshark") + "&p=1");
      $(".grooveshark").css("display", "block");

      var obj = $(".grooveshark");
      var orig = obj.html();
      obj.html(orig);

      $("button").removeClass("active");
      $(this).addClass("active");
    }
  });
});
