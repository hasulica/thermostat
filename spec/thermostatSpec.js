describe('Thermostat', function(){
  'use strict';

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('can report current temperature', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease temperature', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });


});
