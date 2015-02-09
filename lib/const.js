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
pinNameMap[1]  = {'phys': 1,  'gpio': '',   'gpioname': '3.3v',    'bcm': '',   'bcmname': '3V3' };
pinNameMap[2]  = {'phys': 2,  'gpio': '',   'gpioname': '5v',      'bcm': '',   'bcmname': '5V0' };
pinNameMap[3]  = {'phys': 3,  'gpio': '8',  'gpioname': 'SDA.1',   'bcm': '2',  'bcmname': 'SDA1' };
pinNameMap[4]  = {'phys': 4,  'gpio': '',   'gpioname': '5V',      'bcm': '',   'bcmname': '5V0' };
pinNameMap[5]  = {'phys': 5,  'gpio': '9',  'gpioname': 'SCL.1',   'bcm': '3',  'bcmname': 'SCL1' };
pinNameMap[6]  = {'phys': 6,  'gpio': '',   'gpioname': '0v',      'bcm': '',   'bcmname': 'GND' };
pinNameMap[7]  = {'phys': 7,  'gpio': '7',  'gpioname': 'GPIO. 7', 'bcm': '4',  'bcmname': 'GPIO44' };
pinNameMap[8]  = {'phys': 8,  'gpio': '15', 'gpioname': 'TxD',     'bcm': '14', 'bcmname': 'TXD0' };
pinNameMap[9]  = {'phys': 9,  'gpio': '',   'gpioname': '0v',      'bcm': '',   'bcmname': 'GND' };
pinNameMap[10] = {'phys': 10, 'gpio': '16', 'gpioname': 'RxD',     'bcm': '15', 'bcmname': 'RXD0' };
pinNameMap[11] = {'phys': 11, 'gpio': '0',  'gpioname': 'GPIO. 0', 'bcm': '17', 'bcmname': 'GPIO17' };
pinNameMap[12] = {'phys': 12, 'gpio': '1',  'gpioname': 'GPIO. 1', 'bcm': '18', 'bcmname': 'GPIO18' };
pinNameMap[13] = {'phys': 13, 'gpio': '2',  'gpioname': 'GPIO. 2', 'bcm': '27', 'bcmname': 'GPIO27' };
pinNameMap[14] = {'phys': 14, 'gpio': '',   'gpioname': '0v',      'bcm': '',   'bcmname': 'GND' };
pinNameMap[15] = {'phys': 15, 'gpio': '3',  'gpioname': 'GPIO. 3', 'bcm': '22', 'bcmname': 'GPIO22' };
pinNameMap[16] = {'phys': 16, 'gpio': '4',  'gpioname': 'GPIO. 4', 'bcm': '23', 'bcmname': 'GPIO23' };
pinNameMap[17] = {'phys': 17, 'gpio': '',   'gpioname': '3.3v',    'bcm': '',   'bcmname': '3V3' };
pinNameMap[18] = {'phys': 18, 'gpio': '5',  'gpioname': 'GPIO. 5', 'bcm': '24', 'bcmname': 'GPIO24' };
pinNameMap[19] = {'phys': 19, 'gpio': '12', 'gpioname': 'MOSI',    'bcm': '10', 'bcmname': 'SPMOSI' };
pinNameMap[20] = {'phys': 20, 'gpio': '',   'gpioname': '0v',      'bcm': '',   'bcmname': 'GND' };
pinNameMap[21] = {'phys': 21, 'gpio': '13', 'gpioname': 'MISO',    'bcm': '9',  'bcmname': 'SPMIOS' };
pinNameMap[22] = {'phys': 22, 'gpio': '6',  'gpioname': 'GPIO. 6', 'bcm': '25', 'bcmname': 'GPIO25' };
pinNameMap[23] = {'phys': 23, 'gpio': '14', 'gpioname': 'SCLK',    'bcm': '11', 'bcmname': 'SPISCLK' };
pinNameMap[24] = {'phys': 24, 'gpio': '10', 'gpioname': 'CE0',     'bcm': '8',  'bcmname': 'SPICS0' };
pinNameMap[25] = {'phys': 25, 'gpio': '',   'gpioname': '0v',      'bcm': '',   'bcmname': 'GND' };
pinNameMap[26] = {'phys': 26, 'gpio': '11', 'gpioname': 'CE1',     'bcm': '7',  'bcmname': 'SPICS1' };
pinNameMap[27] = {'phys': 27, 'gpio': '30', 'gpioname': 'SDA.0',   'bcm': '0',  'bcmname': 'EEDATA' };
pinNameMap[28] = {'phys': 28, 'gpio': '31', 'gpioname': 'SCL.0',   'bcm': '1',  'bcmname': 'EECLK' };
pinNameMap[29] = {'phys': 29, 'gpio': '21', 'gpioname': 'GPIO.21', 'bcm': '5',  'bcmname': 'GPIO5' };
pinNameMap[30] = {'phys': 30, 'gpio': '',   'gpioname': '0v',      'bcm': '',   'bcmname': 'GND' };
pinNameMap[31] = {'phys': 31, 'gpio': '22', 'gpioname': 'GPIO.22', 'bcm': '6',  'bcmname': 'GPIO6' };
pinNameMap[32] = {'phys': 32, 'gpio': '26', 'gpioname': 'GPIO.26', 'bcm': '12', 'bcmname': 'GPIO12' };
pinNameMap[33] = {'phys': 33, 'gpio': '23', 'gpioname': 'GPIO.23', 'bcm': '13', 'bcmname': 'GPIO13' };
pinNameMap[34] = {'phys': 34, 'gpio': '',   'gpioname': '0v',      'bcm': '',   'bcmname': 'GND' };
pinNameMap[35] = {'phys': 35, 'gpio': '24', 'gpioname': 'GPIO.24', 'bcm': '19', 'bcmname': 'GPIO19' };
pinNameMap[36] = {'phys': 36, 'gpio': '27', 'gpioname': 'GPIO.27', 'bcm': '16', 'bcmname': 'GPIO16' };
pinNameMap[37] = {'phys': 37, 'gpio': '25', 'gpioname': 'GPIO.25', 'bcm': '26', 'bcmname': 'GPIO26' };
pinNameMap[38] = {'phys': 38, 'gpio': '28', 'gpioname': 'GPIO.28', 'bcm': '20', 'bcmname': 'GPIO20' };
pinNameMap[39] = {'phys': 39, 'gpio': '',   'gpioname': '0v',      'bcm': '',   'bcmname': 'GND' };
pinNameMap[40] = {'phys': 40, 'gpio': '29', 'gpioname': 'GPIO.29', 'bcm': '21', 'bcmname': 'GPIO21' };
xt) {

CONST.modeNumber = function(te
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

CONST.pinNum = function(pi_model){
	switch(pi_model){
		case 'PI_MODEL_UNKNOWN':
		case 'PI_MODEL_A':
		case 'PI_MODEL_A':
		case 'PI_MODEL_CM':
			return 27;
			break;
		case 'PI_MODEL_BP': 
			return 40;
			break;
		default:
			return 0;
	}
}


module.exports = CONST;