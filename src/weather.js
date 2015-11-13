$(document).ready(function() {
  $.ajax({
    url : "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0",
    dataType : "jsonp",
    success : function(data) {
      var json = data;
      var location = data['name'];
      var temp_c = data['main']['temp'];
      var weather = data['weather'][0]['description'];
      $(".current-weather").html(location + " is " + weather + " and the temperature is " + temp_c + '&#176;');
    }
  });

});
