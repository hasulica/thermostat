$(document).ready(function() {
  $.ajax({
    url : "http://api.wunderground.com/api/380665aee49bae41/geolookup/conditions/q/UK/London.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      var weather = parsed_json['current_observation']['weather'];
      $(".current-weather").html(location + " is " + weather + " and the temperature is " + temp_c + '&#176;');
    }
  });

});
