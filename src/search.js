$(document).ready(function() {
  $('button').click(function() {
    var query = $('.search input').val();
    $.ajax({
      url : "http://autocomplete.wunderground.com/aq?query=" + query,
      dataType : "jsonp",
      jsonp: "callback",
      jsonpCallback: "jsonpCallbackfunction"
    });

    function jsonpCallbackfunction(json) {
      $.each(data.Results,function() {
        var city = this.Name;
        $('.results').append('<p>' + city + '</p>');
      });
    }

  });

});
