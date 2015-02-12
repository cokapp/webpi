/*
socket.io应用
*/

var app = {};
app.init = function(httpServer) {

    var io = require('socket.io').listen(server);

    io.sockets.on('connection', function(socket) {
        
        //向已连接用户发送欢迎信息
        socket.emit('welcome', {
            connected: true
        });

        socket.on('gpios', function(data){
            

            
        	socket.emit('gpios', {

        	});
        });



    });

}


module.exports = app;
