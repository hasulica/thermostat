$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('.temperature').removeClass("low high medium");
    $('.temperature').text(thermostat.getCurrentTemperature());
    $('.temperature').addClass(thermostat.getUsage());
  }

  updateTemperature();

  $('.up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('.down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('.reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('.PSM-on').on('click', function() {
    thermostat.turnPowerSavingOn();
    updateTemperature();
  });

  $('.PSM-off').on('click', function() {
    thermostat.turnPowerSavingOff();
    updateTemperature();
  });

});
