var wpi = require('wiring-pi'),
    gpioConst = require('./gpioConst.js'),
    gpioCache = require('./gpioCache.js');

var md = {};

md.readPin = function(id){
    var key = parseInt(id);

    var pinData = gpioCache.getPin(key);
    pinData.value = wpi.digitalRead(key);
    gpioCache.setPin(key, pinData);

    console.log('read pin ' + id + ':');
    console.log(pinData);

    return gpioConst.modeEncode(pinData);
}

md.writePin = function(id, pinData){
    var key = parseInt(id);

    var cachedPinData = gpioCache.getPin(key);

    var mixedData = _extend(cachedPinData, pinData);

    wpi.pinMode(key, mixedData.mode);
    cachedPinData.mode = mixedData.mode;
    wpi.digitalWrite(key, mixedData.value);
    cachedPinData.value = mixedData.value;

    if(cachedPinData.value){
        wpi.pullUpDnControl(key, wpi.PUD_UP);
    }else{
        wpi.pullUpDnControl(key, wpi.PUD_DOWN);
    }
    
    gpioCache.setPin(key, cachedPinData);
    console.log('write pin ' + id + ':');
    console.log(cachedPinData);

    //触发事件
    _firePinChanged(cachedPinData);

    return gpioConst.modeEncode(cachedPinData);
}
md.readPins = function(ids){
    if(!ids){
       ids = [];
       for(var i = 1; i <= gpioConst.pinNum(); i++){
            ids.push(i);
       } 
    }

    var pinDataMap = {};
    for(var i in ids){
        var key = ids[i];
        var pinData = md.readPin(key);
        pinDataMap[pinData.pin] = pinData;
    }

    return pinDataMap;
}
md.writePins = function(pinDatas){
    var pinDataMap = {};

    for(var i in pinDatas){
        var pinData = pinDatas[i];

        pinData = md.writePin(pinData.pin, pinData);
        
        pinDataMap[pinData.pin] = pinData;
    }

    return pinDataMap;
}

md.addHandler = function(handle){
    _pinChangedHandlers.push(handle);
}
var _pinChangedHandlers = [];
var _firePinChanged = function(pinData){
    for(var i in _pinChangedHandlers){
        var handler = _pinChangedHandlers[i];
        handler(pinData);
    }
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
