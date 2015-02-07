var CONST = {};

var modeCache = {};
modeCache[global.wpi.INPUT] = 'INPUT';
modeCache[global.wpi.OUTPUT] = 'OUTPUT';
modeCache[global.wpi.PWM_OUTPUT] = 'PWM_OUTPUT';
modeCache[global.wpi.GPIO_CLOCK] = 'GPIO_CLOCK';
modeCache[global.wpi.SOFT_PWM_OUTPUT] = 'SOFT_PWM_OUTPUT';
modeCache[global.wpi.SOFT_TONE_OUTPUT] = 'SOFT_TONE_OUTPUT';
modeCache['IN'] = global.wpi.INPUT;
modeCache['OUT'] = global.wpi.OUTPUT;
modeCache['INPUT'] = global.wpi.INPUT;
modeCache['OUTPUT'] = global.wpi.OUTPUT;
modeCache['PWM_OUTPUT'] = global.wpi.PWM_OUTPUT;
modeCache['GPIO_CLOCK'] = global.wpi.GPIO_CLOCK;
modeCache['SOFT_PWM_OUTPUT'] = global.wpi.SOFT_PWM_OUTPUT;
modeCache['SOFT_TONE_OUTPUT'] = global.wpi.SOFT_TONE_OUTPUT;

var pinNameMap = {};
pinNameMap[1] = {'phys': 1, 'name': '3.3v', 'wpi': '', 'bcm': '', 'bcmname': '3V3' };
pinNameMap[2] = {'phys': 2, 'name': '5v', 'wpi': '', 'bcm': '', 'bcmname': '5V0' };
pinNameMap[3] = {'phys': 3, 'name': 'SDA.1', 'wpi': '8', 'bcm': '2', 'bcmname': 'SDA1' };
pinNameMap[4] = {'phys': 4, 'name': '5V', 'wpi': '', 'bcm': '', 'bcmname': '5V0' };
pinNameMap[5] = {'phys': 5, 'name': 'SCL.1', 'wpi': '9', 'bcm': '3', 'bcmname': 'SCL1' };
pinNameMap[6] = {'phys': 6, 'name': '0v', 'wpi': '', 'bcm': '', 'bcmname': 'GND' };
pinNameMap[7] = {'phys': 7, 'name': 'GPIO. 7', 'wpi': '7', 'bcm': '4', 'bcmname': 'GPIO44' };
pinNameMap[8] = {'phys': 8, 'name': 'TxD', 'wpi': '15', 'bcm': '14', 'bcmname': 'TXD0' };
pinNameMap[9] = {'phys': 9, 'name': '0v', 'wpi': '', 'bcm': '', 'bcmname': 'GND' };
pinNameMap[10] = {'phys': 10, 'name': 'RxD', 'wpi': '16', 'bcm': '15', 'bcmname': 'RXD0' };
pinNameMap[11] = {'phys': 11, 'name': 'GPIO. 0', 'wpi': '0', 'bcm': '17', 'bcmname': 'GPIO17' };
pinNameMap[12] = {'phys': 12, 'name': 'GPIO. 1', 'wpi': '1', 'bcm': '18', 'bcmname': 'GPIO18' };
pinNameMap[13] = {'phys': 13, 'name': 'GPIO. 2', 'wpi': '2', 'bcm': '27', 'bcmname': 'GPIO27' };
pinNameMap[14] = {'phys': 14, 'name': '0v', 'wpi': '', 'bcm': '', 'bcmname': 'GND' };
pinNameMap[15] = {'phys': 15, 'name': 'GPIO. 3', 'wpi': '3', 'bcm': '22', 'bcmname': 'GPIO22' };
pinNameMap[16] = {'phys': 16, 'name': 'GPIO. 4', 'wpi': '4', 'bcm': '23', 'bcmname': 'GPIO23' };
pinNameMap[17] = {'phys': 17, 'name': '3.3v', 'wpi': '', 'bcm': '', 'bcmname': '3V3' };
pinNameMap[18] = {'phys': 18, 'name': 'GPIO. 5', 'wpi': '5', 'bcm': '24', 'bcmname': 'GPIO24' };
pinNameMap[19] = {'phys': 19, 'name': 'MOSI', 'wpi': '12', 'bcm': '10', 'bcmname': 'SPMOSI' };
pinNameMap[20] = {'phys': 20, 'name': '0v', 'wpi': '', 'bcm': '', 'bcmname': 'GND' };
pinNameMap[21] = {'phys': 21, 'name': 'MISO', 'wpi': '13', 'bcm': '9', 'bcmname': 'SPMIOS' };
pinNameMap[22] = {'phys': 22, 'name': 'GPIO. 6', 'wpi': '6', 'bcm': '25', 'bcmname': 'GPIO25' };
pinNameMap[23] = {'phys': 23, 'name': 'SCLK', 'wpi': '14', 'bcm': '11', 'bcmname': 'SPISCLK' };
pinNameMap[24] = {'phys': 24, 'name': 'CE0', 'wpi': '10', 'bcm': '8', 'bcmname': 'SPICS0' };
pinNameMap[25] = {'phys': 25, 'name': '0v', 'wpi': '', 'bcm': '', 'bcmname': 'GND' };
pinNameMap[26] = {'phys': 26, 'name': 'CE1', 'wpi': '11', 'bcm': '7', 'bcmname': 'SPICS1' };
pinNameMap[27] = {'phys': 27, 'name': 'SDA.0', 'wpi': '30', 'bcm': '0', 'bcmname': 'EEDATA' };
pinNameMap[28] = {'phys': 28, 'name': 'SCL.0', 'wpi': '31', 'bcm': '1', 'bcmname': 'EECLK' };
pinNameMap[29] = {'phys': 29, 'name': 'GPIO.21', 'wpi': '21', 'bcm': '5', 'bcmname': 'GPIO5' };
pinNameMap[30] = {'phys': 30, 'name': '0v', 'wpi': '', 'bcm': '', 'bcmname': 'GND' };
pinNameMap[31] = {'phys': 31, 'name': 'GPIO.22', 'wpi': '22', 'bcm': '6', 'bcmname': 'GPIO6' };
pinNameMap[32] = {'phys': 32, 'name': 'GPIO.26', 'wpi': '26', 'bcm': '12', 'bcmname': 'GPIO12' };
pinNameMap[33] = {'phys': 33, 'name': 'GPIO.23', 'wpi': '23', 'bcm': '13', 'bcmname': 'GPIO13' };
pinNameMap[34] = {'phys': 34, 'name': '0v', 'wpi': '', 'bcm': '', 'bcmname': 'GND' };
pinNameMap[35] = {'phys': 35, 'name': 'GPIO.24', 'wpi': '24', 'bcm': '19', 'bcmname': 'GPIO19' };
pinNameMap[36] = {'phys': 36, 'name': 'GPIO.27', 'wpi': '27', 'bcm': '16', 'bcmname': 'GPIO16' };
pinNameMap[37] = {'phys': 37, 'name': 'GPIO.25', 'wpi': '25', 'bcm': '26', 'bcmname': 'GPIO26' };
pinNameMap[38] = {'phys': 38, 'name': 'GPIO.28', 'wpi': '28', 'bcm': '20', 'bcmname': 'GPIO20' };
pinNameMap[39] = {'phys': 39, 'name': '0v', 'wpi': '', 'bcm': '', 'bcmname': 'GND' };
pinNameMap[40] = {'phys': 40, 'name': 'GPIO.29', 'wpi': '29', 'bcm': '21', 'bcmname': 'GPIO21' };


CONST.modeNumber = function(text) {
	var key = text.toUpperCase();
	return modeCache[key];
};

CONST.modeText = function(number) {
	var key = parseInt(number);
	return modeCache[key];
};

CONST.pinName = function(pin){
	return pinNameMap[pin];
}

module.exports = CONST;