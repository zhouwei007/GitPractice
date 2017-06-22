/**
 * Created by zhouwei on 2017/6/22.
 */
var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8182 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
        if (message) {
            ws.send(message)
        }
    })

})