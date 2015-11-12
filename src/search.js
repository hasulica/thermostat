$(document).ready(function() {
  $('button').click(function() {
    var query = $('.search input').val();
    $.ajax({
      url : "http://autocomplete.wunderground.com/aq?query=" + query,
      dataType : "jsonp",
      success : function(parsed_json) {
        $.each(parsed_json,function() {
          var city = this.Name;
          $('.results').append('<p>' + city + '</p>');
        });
      }
    });

  });

});