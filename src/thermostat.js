function Thermostat() {
  this._temperature = 20;
  this._MINUMUM_TEMPERATURE = 10;
  this._powerSavingMode = true;
  this._MAXIMUM_TEMPERATURE_OFF = 32;
  this._MAXIMUM_TEMPERATURE_ON = 25;
}

Thermostat.prototype.isPowerSavingOn = function () {
  return this._powerSavingMode;
};

Thermostat.prototype.turnPowerSavingOff = function () {
  this._powerSavingMode = false;
};

Thermostat.prototype.turnPowerSavingOn = function () {
  this._powerSavingMode = true;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temperature === this._MINUMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingOn()) {
    return this._temperature === this._MAXIMUM_TEMPERATURE_ON;
  }
  return this._temperature === this._MAXIMUM_TEMPERATURE_OFF;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this._temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this._temperature -= 1;
};
