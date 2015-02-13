/*
socket.io应用
*/
var gpioConst = require('../gpio/gpioConst.js');

var md = {};
md.init = function(httpServer) {

    var io = require('socket.io').listen(httpServer);

    //写入数据时，广播消息
    GPIO.addHandler(function(pinData){
        io.sockets.emit('gpio', gpioConst.modeEncode(pinData));
    });

    io.sockets.on('connection', function(socket) {
        //向已连接用户发送欢迎信息
        socket.emit('welcome', {
            connected: true
        });
        //首次启动发送全部IO口状态
        var pinDataMap = GPIO.readPins();
        socket.emit('init', pinDataMap);
        //绑定写入动作
        socket.on('gpio', function(data){
            GPIO.writePin(data.pin, data);
        });
        socket.on('gpios', function(data){
            GPIO.writePins(data);
        });
    });

}


module.exports = md;
