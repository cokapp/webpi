var wpi = require('wiring-pi'),
    gpioConst = require('./gpioConst.js'),
    gpioCache = require('./gpioCache.js');

var md = {};
var md._cache = {};

md.readPin = function(id){
    var key = parseInt(id);

    var pinData = gpioCache.getPin(key);
    pinData.value = wpi.digitalRead(key);
    gpioCache.setPin(key, pinData);

    return pinData;
}
md.writePin = function(id, pinData){
    var key = parseInt(id);

    var cachedPinData = gpioCache.getPin(key);

    var mixedData = _extend(cachedPinData, pinData);

    if(mixedData.mode != cachedPinData.mode){
        wpi.pinMode(key, mixedData.mode);
        cachedPinData.mode = mixedData.mode;
    }
    if(mixedData.value != cachedPinData.value){
        wpi.digitalWrite(key, mixedData.value);
        cachedPinData.value = mixedData.value;
    }

    gpioCache.setPin(key, cachedPinData);

    return cachedPinData;
}
md.readPins = function(ids){
    if(!ids){
       ids = [];
       for(var i = 1; i < gpioConst.pinNum(); i++;){
            ids.push(i);
       } 
    }

    var pinDataMap = {};
    for(var i in ids){
        pinDataMap[i] = md.readPin(i);
    }

    return pinDataMap;
}
md.writePins = function(pinDatas){
    var pinDataMap = {};

    for(var i in pinDatas){
        var pinData = pinDatas[i];
        
        var key = parseInt(pinData.pin);
        pinDataMap[key] = md.writePin(key, pinData);
    }

    return pinDataMap;
}


var _extend = function(target, from){
    var fromMode = gpioConst.modeNumber(from.mode),
        fromValue = parseInt(from.value);

    var mixedData = {
        mode: target.mode,
        value: target.value
    };

    if(fromMode != null && fromMode != undefined){
        mixedData.mode = fromMode;
    }
    if(fromValue != null && fromValue != undefined){
        mixedData.value = fromValue;
    }

    return mixedData;
}


var _init = function() {
    wpi.setup('phys');
    gpioCache.init();
}

_init();

module.exports = md;
