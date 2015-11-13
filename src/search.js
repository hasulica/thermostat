$(document).ready(function() {
    $('button').click(function() {
        var query = $('.search input').val();
        var url = 'http://api.openweathermap.org/data/2.5/find?q=' + query + '&type=like&mode=json&appid=2de143494c0b295cca9337e1e96b00e0';
        $.ajax({
          url : url,
          dataType : "jsonp",
          success : function(data) {
            data.list.forEach( function(object) {
              $('.results').append("<p id=" + object.id + ">" + object.name + "</p>");
            });
          }
        });
    });



    function ajaxRequest(evt) {
          var objectId = evt.attr('id');
          event.preventDefault();
          $.ajax({
            url : "http://api.openweathermap.org/data/2.5/weather?id=" + objectId + "&appid=2de143494c0b295cca9337e1e96b00e0",
            dataType : "jsonp",
            success : function(data) {
              var json = data;
              var location = data['name'];
              var temp_c = data['main']['temp'];
              var weather = data['weather'][0]['description'];
              $(".current-weather").html(location + " is " + weather + " and the temperature is " + temp_c + '&#176;');
            }
          });
        }


});

$(document).on('click', '.result p', function(){
  ajaxRequest(this);
});
