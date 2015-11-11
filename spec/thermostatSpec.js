describe('Thermostat', function(){
  'use strict';

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('can report current temperature', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increase temperature', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease temperature', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('cannot decrease temperature below 10', function() {
    for(var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  describe ('power saving', function(){
    it('power saving is on by default', function() {
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });

    it('turn power saving off', function() {
      thermostat.turnPowerSavingOff();
      expect(thermostat.isPowerSavingOn()).toEqual(false);
    });

    it('turn power saving back on', function() {
      thermostat.turnPowerSavingOff();
      thermostat.turnPowerSavingOn();
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });

    it('maximum temperature is 25 when power saving on', function(){
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('maximum temperature is 32 when power saving off', function(){
      thermostat.turnPowerSavingOff();
      for(var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });

});
